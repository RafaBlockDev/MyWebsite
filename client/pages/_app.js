import '../styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { chain, createClient, WagmiProvider } from 'wagmi';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
