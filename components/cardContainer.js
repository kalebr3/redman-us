export default function CardContainer({ children }) {
    return (
        <div className="flex flex-row flex-wrap justify-center lg:justify-start">
            {children}
        </div>
    )
}