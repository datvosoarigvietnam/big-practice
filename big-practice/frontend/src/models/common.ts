import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

export interface ILayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ILayoutProps) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
