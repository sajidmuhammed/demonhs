'use client';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { apiRequest } from '../services/commonservce/apirequests';
import { useState } from 'react';

const useHandleSignup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading ] = useState(false);

  const handleSignupSubmit = async (data, userType, resetForm) => {
  try {
    setIsLoading(true);
    const submitResponse = await apiRequest(`/api/signup/${userType}`, 'POST', data);

    if (submitResponse?.error) {
      toast.error(submitResponse.error);
    } else {
      toast.success(submitResponse.message || 'Signup successful!');
      resetForm();
      router.push(`/auth/${userType}_login`);
    }
  } catch (err) {
    console.error('Signup error:', err);

    if (err?.response?.status === 409) {
      toast.error('A user with this email already exists.');
    } else if (err?.response?.status === 400) {
      toast.error('Invalid user type.');
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  } finally {
    setIsLoading(false);
  }
};


  return { handleSignupSubmit, isLoading };
};

export default useHandleSignup;
