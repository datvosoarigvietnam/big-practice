import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SignupLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? SignupLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
