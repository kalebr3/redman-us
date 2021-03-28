import Sidebar from './sidebar'

export default function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div>{children}</div>
        </>
    )
}