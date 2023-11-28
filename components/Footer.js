import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
            <nav className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/resume">Resume</Link>
            </nav>
        </footer>
    )
}
