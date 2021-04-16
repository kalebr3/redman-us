import DynamicComponent from 'components/DynamicComponent'

export default function Section({ blok }) {
    if (!blok.name) {
        return (
            <div className="mt-8">
                { blok ? blok.contents.map((blok) => (
                    <DynamicComponent blok={blok} key={blok._uid} />
                )) : null }
            </div>
        )
    }
    
    return (
        <div className="mt-8">
            <p className="m-1 pb-3 text-2xl">{blok.name}</p>
            { blok ? blok.contents.map((blok) => (
                <DynamicComponent blok={blok} key={blok._uid} />
            )) : null }
        </div>
    )
}
