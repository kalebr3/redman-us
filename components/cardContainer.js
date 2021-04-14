import DynamicComponent from 'components/DynamicComponent'

export default function CardContainer({ blok }) {
    return (
        <div className="flex flex-row flex-wrap justify-around ">
            { blok ? blok.cards.map((blok) => (
                <DynamicComponent blok={blok} key={blok._uid} />
            )) : null }
        </div>
    )
}
