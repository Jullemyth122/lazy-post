import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import '@/styles/globals.scss'
import '@/styles/auth.scss'
import '@/styles/home.scss'
import '@/styles/posting.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
// import accountSlice from '@/pages/features/Authentication';
import { store } from '@/features/Authentication';
import { AccountProvider } from '@/components/context/Account';

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
    <Provider store={store}>
      <AccountProvider>
        <Component {...pageProps} />
      </AccountProvider>
    </Provider>
  </>
}
