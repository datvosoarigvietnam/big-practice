import { ILayoutProps } from '@/models/common';
import React from 'react';

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      main layout
      {children}
    </div>
  );
}
