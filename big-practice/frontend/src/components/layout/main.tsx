import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ILayoutProps } from '../../models/common';
import Sidebar from '../Sidebar/Sidebar';
import { AppContext } from '@/store/AppContext';
import Spinner from '../Spinner';

export function MainLayout({ children }: ILayoutProps) {
  const { isAuthenticated } = useContext(AppContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/signin');
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
