export default function Section({ children, title }) {
    if (!title) {
        return (
            <div className="mt-8">
                {children}
            </div>
        )
    } else {
        return (
            <div className="mt-8">
                <p className="m-1 pb-3 text-2xl">{title}</p>
                {children}
            </div>
        )
    }
}