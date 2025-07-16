import { connectDB } from '../../db';
import Patient from '../../../../models/auth/patient';
import Physician from '../../../../models/auth/physician';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const userType = params?.type;

    await connectDB();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    let existingUser = null;

    if (userType === 'patient') {
      existingUser = await Patient.findOne({ email });
    } else if (userType === 'physician') {
      existingUser = await Physician.findOne({ email });
    } else {
      return NextResponse.json({ error: 'Invalid user type' }, { status: 400 });
    }

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found', field: 'email' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Incorrect password', field: 'password' }, { status: 401 });
    }

    const tokenPayload = {
      id: existingUser._id,
      email: existingUser.email,
      fullName: existingUser.fullName,
      userType,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '7d' });

    const response = NextResponse.json({
      message: `${userType} logged in successfully`,
      data: {
        id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        userType,
      },
    });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
  }
}
