export default function Header() {
    return (
        <header className="bg-gray-900 text-gray-100">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <a href="#" class="text-xl font-bold">
                    Logo
                </a>
                <div>
                    <a href="#" class="mr-4">
                        Link 1
                    </a>
                    <a href="#" class="mr-4">
                        Link 2
                    </a>
                    <a href="#" class="mr-4">
                        Link 3
                    </a>
                    <a href="#" class="mr-4">
                        Link 4
                    </a>
                </div>
            </nav>
        </header>
    )
}
