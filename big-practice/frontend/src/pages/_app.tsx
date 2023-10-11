import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SignupLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import { LabelProvider } from '@/store/StepperDataContenxt';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? SignupLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <LabelProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LabelProvider>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
