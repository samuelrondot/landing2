'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/app/globals.css'
import { ThemeProvider } from "@/components/providers"
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from './config/site'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import Script from 'next/script'
import Intercom from '@/components/intercom'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const pathname = usePathname()
  console.log(pathname)

  return (
    <html lang="en" suppressHydrationWarning>

    <Intercom/>

<Script strategy="afterInteractive" id='tagmanager' src="https://www.googletagmanager.com/gtag/js?id=G-K29KX46KCP" />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K29KX46KCP', {
            page_path: window.location.pathname,
          });
          gtag('config', 'AW-1004009503');
        `}
  </Script>
      <head />
       <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased"
          )}
        >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
               { !pathname.includes('register')  && <SiteHeader />}
                <main className="flex-1">{children}</main>
                { !pathname.includes('register') && <SiteFooter /> }
              </div>
            </div>
      </ThemeProvider>
      </body>
      
    </html>
  )
}
