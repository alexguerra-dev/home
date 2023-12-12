import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Header'

export default function Games() {
    return (
        <>
            <Header></Header>
            <main className="p-24">
                <h1 className="text-4xl font-bold">Games</h1>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image
                        src="/placeholder.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                        </span>
                    </div>
                </div>

                <ul>
                    <li>
                        <Link href="/projects/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/projects/games/dice">Dice Roller</Link>
                    </li>
                    <li>
                        <Link href="/projects/games/kerokero">KeroKero</Link>
                    </li>
                </ul>
            </main>
            <Footer></Footer>
        </>
    )
}
