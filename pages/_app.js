import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Head from 'next/head';

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return (<QueryClientProvider client={queryClient}>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </QueryClientProvider>)
}

export default MyApp
