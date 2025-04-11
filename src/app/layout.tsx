"use client";

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Fazilabs, Digital Services, Web Development, Mobile Apps, SEO, WordPress, React Native" />
        <meta name="author" content="Fazilabs" />
      </head>
      <body className={inter.className}>
        <style jsx global>{`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb;
            color: #1f2937;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          button {
            cursor: pointer;
          }
          * {
            box-sizing: inherit;
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}