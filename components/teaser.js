const Teaser = ({blok}) => {
    return (
        <div className="grid place-items-center h-96 text-gray-500 text-xl px-6">
            {blok.description}
        </div>
    )
}

export default Teaser