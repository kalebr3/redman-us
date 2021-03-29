import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div className="flex items-center justify-center mt-8">
                <Image src="/profile_picture.jpg" width={150} height={150} className="rounded-full" />
            </div>

            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <span className="text-gray-800 text-2xl font-semibold">Kaleb Redman</span>
                </div>
            </div>

            <nav className="flex flex-col mt-8 px-4 text-center">
                <Link href="/">
                    <a className="py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">About Me</a>
                </Link>
                <Link href="/career">
                    <a className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">Career</a>
                </Link>
                <Link href="/education">
                    <a className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">Education</a>
                </Link>
                <Link href="/projects">
                    <a className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">Projects</a>
                </Link>
                <Link href="/photography">
                    <a className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">Photography</a>
                </Link>
            </nav>
        </div>
    )
}