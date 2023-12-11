'use client'

import { useState } from 'react'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    let [open, setOpen] = useState(false)

    const mobileMenu = () => {
        return (
            <div className="block lg:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <FontAwesomeIcon
                        icon={open ? faX : faBars}
                        className="fill-current h-3 w-3"
                    />
                </button>
            </div>
        )
    }

    return (
        <header className="shadow-md ">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">
                        alexguerra.io
                    </span>
                </div>

                <div className="max-lg:hidden">
                    <Link href="/projects/games">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Dice
                        </p>
                    </Link>
                    <Link href="/resume">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Resume
                        </p>
                    </Link>
                    <Link href="/about">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            About
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact
                        </p>
                    </Link>
                </div>

                {}
                {mobileMenu()}
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                        open ? '' : 'hidden'
                    }`}
                >
                    <div className="text-sm lg:flex-grow lg:hidden ">
                        <Link
                            href="/projects"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/resume"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Resume
                        </Link>
                        <Link
                            href="/about"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
