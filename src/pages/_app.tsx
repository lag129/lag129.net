import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { notoSansJP } from '@/font/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansJP.className}>
      <Component {...pageProps} />
    </main>
  );
}
