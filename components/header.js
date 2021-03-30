export default function Header({ clickMenu, text }) {
    if (!text) {
        return null
    } else {
        return (
            <header className="flex items-center justify-center p-8 shadow">
                <div className="flex flex-grow items-center space-x-4 lg:space-x-0">
                    <button onClick={clickMenu} className="text-gray-500 focus:outline-none lg:hidden">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-grow items-center">
                    <span className="text-gray-800 text-3xl font-semibold">{text}</span>
                </div>
            </header>
        )
    }
}