import React from 'react';

import { ILayoutProps } from '../../models/common';

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      main layout
      {children}
    </div>
  );
}
