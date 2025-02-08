import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { notoSansJP } from '@/font/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansJP.className}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
