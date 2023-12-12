import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Kerokero() {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col flex-grow items-center justify-between p-24">
                <h1 className="text-4xl font-bold">KeroKero</h1>

                <h2>
                    <ul>
                        <li>Coming soon!</li>
                    </ul>
                </h2>
            </main>
            <Footer></Footer>
        </>
    )
}
