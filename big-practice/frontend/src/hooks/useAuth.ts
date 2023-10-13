import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const getAccessTokenFromLS = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token') || '';
  }
  return '';
};

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(getAccessTokenFromLS()),
  );

  const setAuthenticated = (accessToken: string) => {
    setIsAuthenticated(accessToken !== '');
    if (accessToken === '') {
      localStorage.removeItem('access_token');
    } else {
      localStorage.setItem('access_token', accessToken);
    }
  };

  useEffect(() => {
    const accessToken = getAccessTokenFromLS();
    setIsAuthenticated(accessToken !== '');
  }, []);

  return { isAuthenticated, setAuthenticated };
};
