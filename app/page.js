import Link from 'next/link'

import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col flex-grow items-center justify-between p-24">
                <div className="bg-gray-900">
                    <div className="container mx-auto py-20 px-4">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-4xl font-bold text-white">
                                Welcome to our Website
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Learn, Explore, and Connect
                            </p>
                            <a
                                href="#"
                                className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>

                <h2>Things todo</h2>
                <ul>
                    <li>Look at my projects</li>
                    <li>Look at my resume</li>
                    <li>Hire me</li>
                </ul>

                <Image src="/placeholder.jpg" width={500} height={500} />
            </main>

            <Footer></Footer>
        </>
    )
}
