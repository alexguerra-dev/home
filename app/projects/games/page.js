import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Header'

export default function Games() {
    return (
        <>
            <Header></Header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Games</h1>

                <h2>
                    <ul>
                        <li>Coming soon!</li>
                        <Link href="/projects/games/dice">Dice Game</Link>
                    </ul>
                </h2>
            </main>
            <Footer></Footer>
        </>
    )
}
