'use client';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { apiRequest } from '../services/commonservce/apirequests';
import { useAuthUser } from '../components/common/AuthContext';
import { useState } from 'react';

const useHandleLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {setIsLoadingUserCred} = useAuthUser();

  const handleLoginSubmit = async (data, userType, resetForm) => {
    
    try {
      setIsLoading(true);
      const submitResponse = await apiRequest(`/api/login/${userType}`, 'POST', data);

      if (submitResponse?.error) {
        toast.error(submitResponse.error);
      } else {
        toast.success(submitResponse.message || 'Login successful!');
        resetForm();
        setIsLoadingUserCred(true);
        router.push(`/`);
      }
    } catch (err) {
      console.error('Login error:', err);

      const status = err?.response?.status;

      if (status === 404) {
        toast.error('No user found with this email.');
      } else if (status === 401) {
        toast.error('Incorrect password.');
      } else if (status === 400) {
        toast.error('Invalid user type.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLoginSubmit, isLoading };
};

export default useHandleLogin;
