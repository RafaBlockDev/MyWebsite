import '../styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { chain, createClient, WagmiProvider } from 'wagmi';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.alchemy(process.env.ALCHEMY_ID),
    apiProvider.fallback()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Rafa´s portafolio 👋🏻',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {

  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions={true} {...etc}>
        <Component {...pageProps}/>
      </RainbowKitProvider>
    </WagmiProvider>
  );

}

export default MyApp
