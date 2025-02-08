import { Noto_Sans_JP } from 'next/font/google'

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['100', '300', '400', '500', '700', '900'],
})
