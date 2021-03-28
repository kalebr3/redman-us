export default function Sidebar() {
    return (
        <div className="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <span className="text-gray-800 text-2xl font-semibold">Kaleb Redman</span>
                </div>
            </div>

            <nav className="flex flex-col mt-10 px-4 text-center">
                <a href="#" className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">Home</a>
            </nav>
        </div>
    )
}