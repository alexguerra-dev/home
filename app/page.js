import Link from 'next/link'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default function Home() {
    return (
        <>
            <Header></Header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Hello World!</h1>
                <Link href="/resume">Resume</Link>
            </main>
            <Footer></Footer>
        </>
    )
}
