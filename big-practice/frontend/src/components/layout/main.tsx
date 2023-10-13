import React, { useContext, useEffect } from 'react';

import { ILayoutProps } from '../../models/common';
import Sidebar from '../Sidebar/Sidebar';
import { AppContext } from '@/store/AppContext';
import { useRouter } from 'next/router';

export function MainLayout({ children }: ILayoutProps) {
  const { isAuthenticated } = useContext(AppContext)
  const router = useRouter()
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/signin');
    }
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
