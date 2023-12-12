import Header from '@/components/Header'
import Footer from '@/components/Header'

export default function Shop() {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Music Store Front</h1>

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
