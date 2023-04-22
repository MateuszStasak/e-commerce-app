import '../../styles/global.css'
import { Lato } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { i18n, Locale } from '../../i18n/i18n-config'
import { getDictionary } from '../../i18n/get-dictionary'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const { navBar } = await getDictionary(params.lang)

  return (
    <html lang={params.lang} className={lato.className}>
      <body className="flex flex-col items-center">
        <div className="w-full max-w-screen-2xl pr-6 md:pl-14 md:pr-14">
          <nav className="mb-10 flex h-12 items-center justify-between bg-black bg-gradient-to-bl via-black to-black p-10 md:h-28 lg:h-36">
            <Link href={'/'}>
              <span className="text-2xl font-black text-white drop-shadow-2xl">Trendly</span>
            </Link>

            <div className="flex items-center gap-10">
              <Link href={'/menu'} className="text-sm uppercase text-white">
                {navBar.menu}
              </Link>
              <Link href={'/cart'} className="text-sm uppercase text-white">
                {navBar.cart}
              </Link>
            </div>
          </nav>
          {children}

          <footer className="mt-10 h-20 items-center justify-center bg-black bg-gradient-to-bl via-black to-black text-white md:h-28 lg:h-36"></footer>
        </div>
      </body>
    </html>
  )
}
