import SbEditable from 'storyblok-react'

import CardContainer from 'components/cardContainer'
import CareerCard from 'components/careerCard'
import CertificationCard from 'components/certificationCard'
import EducationCard from 'components/educationCard'
import ProjectCard from 'components/projectCard'
import Section from 'components/section'
import Teaser from 'components/teaser'

import ExclamationIcon from 'components/svg/exclamationIcon'

// Resolve Storyblok components to Next.js components
const Components = {
    'card_grid': CardContainer,
    'career_card': CareerCard,
    'certification_card': CertificationCard,
    'education_card': EducationCard,
    'project_card': ProjectCard,
    'section': Section,
    'teaser': Teaser,
}

const DynamicComponent = ({blok}) => {
    // Check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        // Wrap with SbEditable for visual editing
        return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
    }
    return (
        <div className="bg-red-100 p-5 w-full">
            <div className="flex space-x-3">
                <ExclamationIcon />
                <div className="leading-tight flex flex-col space-y-2">
                    <div className="text-sm font-medium text-red-700">Something Went Wrong</div>
                    <div className="flex-1 leading-snug text-sm text-red-600">The component <strong>{blok.component}</strong> has not been defined yet.</div>
                </div>
            </div>
        </div>
    )
}

export default DynamicComponent
