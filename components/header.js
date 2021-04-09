import MenuIcon from 'components/svg/menuIcon'

export default function Header({ clickMenu, text }) {
    if (!text) {
        return null
    } else {
        return (
            <header className="z-10 flex items-center justify-center p-6 shadow">
                <div className="flex flex-grow items-center space-x-4 lg:space-x-0">
                    <button onClick={clickMenu} className="text-gray-500 focus:outline-none lg:hidden">
                        <MenuIcon />
                    </button>
                </div>
                <div className="flex flex-grow items-center">
                    <span className="uppercase text-gray-800 text-3xl font-semibold">{text}</span>
                </div>
            </header>
        )
    }
}