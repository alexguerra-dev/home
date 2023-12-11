import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Projects() {
    return (
        <>
            <Header></Header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Projects</h1>
                <h2>
                    <ul>
                        <li>
                            <Link href="/projects/games">Games</Link>
                        </li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </h2>
            </main>
            <Footer></Footer>
        </>
    )
}
