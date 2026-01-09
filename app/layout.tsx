import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProviders } from './theme-provider'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anuj Gupta',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        {/* <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
        <Script id="rdcdn-script" strategy="afterInteractive">
          {`
            (function (w, d, s, u, dbg) {
              var js, fjs = d.getElementsByTagName(s)[0];
              window.rdcndbg = dbg;
              js = d.createElement(s);
              js.async = true;
              js.src = u;
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, 'script', 'https://rdcdn.com/rtjs?aid=30724', false);
          `}
        </Script> */}
      </body>
    </html>
  )
}
