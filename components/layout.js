import Sidebar from './sidebar'

export default function Layout({ children }) {
    return (
        <>
            <div className="flex h-screen bg-gray-100 font-roboto">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
            </div>
        </>
    )
}