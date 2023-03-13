"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [polygon],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
          <head />
        <body className="dark:bg-stone-900">
          <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains}>
                <ThemeProvider enableSystem={true} attribute="class">
                  <Navbar />
                  {children}
                  <Footer />
                </ThemeProvider>
              </RainbowKitProvider>
          </WagmiConfig>
        </body>
    </html>
  )
}
