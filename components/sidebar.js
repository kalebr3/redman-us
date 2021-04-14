// NextJS Imports
import Link from 'next/link'

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar({ story, active, clickClear }) {
    return (
        <div className="flex h-screen bg-gray-100 shadow">
            <div className={`${active ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`} onClick={clickClear}></div>
            <div className={`${active ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex flex-col min-h-screen">
                    {/* Profile Picture */}
                    <div className="flex items-center justify-center mt-8">
                        <img src={ story ? story.content.profile_picture.filename : null } width="150" height="150" className="rounded-full" />
                    </div>
                    {/* Site Title */}
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex items-center">
                            <span className="uppercase text-gray-800 text-2xl font-semibold">{ story ? story.content.site_name : null }</span>
                        </div>
                    </div>
                    {/* Navigation Menu */}
                    <nav className="uppercase flex flex-col mt-8 px-4 text-center flex-grow">
                        { story ? story.content.navigation_links.map((blok) => (
                            <Link href={blok.url.url} key={blok._uid}>
                                <a className="mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">{blok.label}</a>
                            </Link>
                        )) : null }
                    </nav>
                    {/* Social Menu and Footer */}
                    <footer>
                        <div className="flex items-center justify-around m-6">
                            { story ? story.content.social_links.map((blok) => (
                                <a href={blok.url.url} key={blok._uid}>
                                    <FontAwesomeIcon icon={[blok.icon_family, blok.icon_name]} />
                                </a>
                            )) : null }
                        </div>
                        <div className="flex items-center justify-center m-6">
                            <p className="text-gray-400">{ story ? story.content.footer : null }</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
