export default function Header({ text }) {
    if (!text) {
        return null
    } else {
        return (
            <header className="z-10 flex items-center justify-center p-6 bg-blue-800 shadow-lg">
                <div className="flex items-center">
                    <span className="uppercase text-gray-100 text-2xl font-semibold">{text}</span>
                </div>
            </header>
        )
    }
}
