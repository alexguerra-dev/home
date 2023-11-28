import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resume() {
    return (
        <>
            <Header></Header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Resume</h1>

                <h2>
                    <ul>
                        <li>Alex Guerra</li>
                    </ul>
                </h2>

                <h2>Education</h2>
            </main>
            <Footer></Footer>
        </>
    )
}
