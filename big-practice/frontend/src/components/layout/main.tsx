import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ILayoutProps } from '../../models/common';
import Sidebar from '../Sidebar/Sidebar';
import { AppContext } from '@/store/AppContext';

export function MainLayout({ children }: ILayoutProps) {
  const { isAuthenticated } = useContext(AppContext);
  const router = useRouter();
  const [, setIsLoading] = useState(!isAuthenticated); // Track loading state

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/signin');
    } else {
      setIsLoading(false); // Set loading to false once authentication is verified
    }
  }, [isAuthenticated]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   // Redirect logic should have already happened, but in case of unexpected situations
  //   return null;
  // }

  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
