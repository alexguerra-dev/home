import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
    title: 'Home',
    description: 'My home page',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">{children}</div>
            </body>
            <Analytics />
        </html>
    )
}
