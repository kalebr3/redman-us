export default function CardContainer({ children }) {
    return (
        <div className="flex flex-row flex-wrap">
            {children}
        </div>
    )
}