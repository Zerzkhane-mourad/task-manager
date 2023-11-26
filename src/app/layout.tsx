import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/mainLaout/Navbar'
import { ClerkProvider } from '@clerk/nextjs'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang='en' className='light'>
      {/* <Providers> */}
     
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
             <ClerkProvider>
          <Navbar />
          {children}
          </ClerkProvider>
        </body>
    </html>

  )
}