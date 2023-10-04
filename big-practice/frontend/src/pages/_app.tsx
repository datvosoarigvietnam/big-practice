import { EmptyLayout } from '@/components';
import { AppPropsWithLayout } from '@/models/common';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
