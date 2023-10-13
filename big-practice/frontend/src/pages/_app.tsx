// import '@/styles/globals.css';
// import { MantineProvider } from '@mantine/core';
// import '@mantine/core/styles.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ToastContainer } from 'react-toastify';

// import { SignupLayout } from '@/components/layout';
// import { AppPropsWithLayout } from '@/models/common';
// import { LabelProvider } from '@/store/StepperDataContenxt';
// import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import { SignupLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import AppProvider from '@/store/AppContext';
import { LabelProvider } from '@/store/StepperDataContenxt';

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? SignupLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <AppProvider>
          <LabelProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LabelProvider>
        </AppProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
