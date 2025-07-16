
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
    
  const token = await cookies()?.get('auth_token')?.value;
  
  if (!token) return Response.json({ user: null });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return Response.json({ user });
  } catch {
    return Response.json({ user: null });
  }
}


