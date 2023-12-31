import React from 'react';

import { ILayoutProps } from '@/models/common';

export function SignupLayout({ children }: ILayoutProps) {
  return <div className="bg-[#FCFAFA] h-[100vh]">{children}</div>;
}
