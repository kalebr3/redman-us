import { useState } from 'react'
import Head from 'next/head'
import Sidebar from './sidebar'
import Header from './header'

export default function Layout({ header, children }) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <>
            <Head>
                <title>Kaleb Redman - {header}</title>
            </Head>
            <div className="flex h-screen bg-gray-100 font-roboto">
            <Sidebar clickClear={handleClick} active={active} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header clickMenu={handleClick} text={header} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto">
                        <div className="container mx-auto px-6 py-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}