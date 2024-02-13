import { useEffect } from 'react';
import { useRouter } from 'next/router';
import authService from '../services/authService';

const useAuth = (): boolean => {
  const router = useRouter();

  // Check authentication status on initial render
  const isAuthenticated = authService.isAuthenticated();

  // Redirect to login page if not authenticated and trying to access a protected route
  useEffect(() => {
    if (!isAuthenticated && !router.pathname.startsWith('/login')) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};

export default useAuth;
