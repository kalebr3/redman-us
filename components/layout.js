import { useState } from 'react'
import Head from 'next/head'
import Sidebar from 'components/sidebar'
import Header from 'components/header'

export default function Layout({ data, header, children }) {
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
            <Sidebar story={data} clickClear={handleClick} active={active} />
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