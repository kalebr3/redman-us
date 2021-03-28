import Sidebar from './sidebar'
import Header from './header'

export default function Layout({ header, children }) {
    return (
        <>
            <div className="flex h-screen bg-gray-100 font-roboto">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header text={header} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto">
                        <div className="container mx-auto px-6 py-8">
                            <div className="grid place-items-center h-96 text-gray-500 text-xl border-4 border-gray-300 border-dashed">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}