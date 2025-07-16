'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { apiRequest } from '../../services/commonservce/apirequests';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUserCred, setIsLoadingUserCred] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiRequest('/api/get_jwt_token_details', 'GET');
        setUser(response?.user || null);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      }
      finally{
        setIsLoadingUserCred(false);
      }
    };

    fetchUser();
  }, [isLoadingUserCred]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoadingUserCred, setIsLoadingUserCred }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthUser must be used within an AuthProvider');
  }
  return context;
};

