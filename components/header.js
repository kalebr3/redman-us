export default function Header({ text }) {
    if (!text) {
        return null
    } else {
        return (
            <header className="flex items-center justify-center p-8 shadow">
                <div className="flex items-center">
                    <span className="text-gray-800 text-3xl font-semibold">{text}</span>
                </div>
            </header>
        )
    }
}