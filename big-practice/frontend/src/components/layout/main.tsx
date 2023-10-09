import React from 'react';

import { ILayoutProps } from '../../models/common';
import Sidebar from '../Sidebar/Sidebar';

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
