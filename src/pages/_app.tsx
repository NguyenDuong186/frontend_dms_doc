import '../../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { store } from '../common/hooks/store-redux'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'

type NextPageWithLayout<P = any> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): React.ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      )}
    </Provider>
  )
}

export default MyApp
