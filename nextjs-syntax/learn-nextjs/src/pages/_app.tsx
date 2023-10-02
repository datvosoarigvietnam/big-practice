import { EmptyLayout } from '@/components/layout'
import '@/styles/globals.css'
import { AppPropsWithLayout } from '../../models/common'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
