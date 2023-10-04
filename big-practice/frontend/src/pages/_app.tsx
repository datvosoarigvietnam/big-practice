import { SignupLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? SignupLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
