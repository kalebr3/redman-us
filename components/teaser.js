import { createMarkup } from 'lib/storyblok'

const Teaser = ({blok}) => {
    return (
        <div className="grid place-items-center mt-10 h-40 text-gray-500 text-xl px-6" dangerouslySetInnerHTML={createMarkup(blok.description)} />
    )
}

export default Teaser