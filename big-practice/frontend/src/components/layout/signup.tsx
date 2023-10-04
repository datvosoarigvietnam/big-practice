import { ILayoutProps } from '@/models/common';
import React from 'react';

export function SignupLayout({ children }: ILayoutProps) {
  return <div className="bg-[#FCFAFA] h-[100vh]">{children}</div>;
}
