import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { SpeedInsights } from '@vercel/speed-insights/next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
    title: 'Home',
    description: 'My home page',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <SpeedInsights />
        </html>
    )
}
