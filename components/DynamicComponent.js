import SbEditable from 'storyblok-react'
import Teaser from 'components/teaser'

// Resolve Storyblok components to Next.js components
const Components = {
    'teaser': Teaser,
}

const DynamicComponent = ({blok}) => {
    // Check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        // Wrap with SbEditable for visual editing
        return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
    }
    return (<p>The component <strong>{blok.component}</strong> has not been defined yet.</p>)
}

export default DynamicComponent