'use client';
import { useState } from 'react';
import { apiRequest } from '../services/commonservce/apirequests';
import { useAuthUser } from '../components/common/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useLogoutUser = () => {
  const { setUser, user } = useAuthUser();
  const router = useRouter();
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const logout = async () => {
    try {
      setIsLogoutLoading(true);
      const response = await apiRequest(`/api/logout`, 'POST');
      setUser(null);
      toast.success(response.message || 'Logged out successfully!');
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed!');
      setUser(null);
    } finally {
      setIsLogoutLoading(false);
    }
  };

  return { logout, isLogoutLoading, user };
};

export default useLogoutUser;
