import Layout from '../components/layout'
import Section from '../components/section'
import CardContainer from '../components/cardContainer'
import ProjectCard from '../components/projectCard'

import Placeholder from '../components/placeholder'

export default function Projects() {
    return (
        <Layout header="Projects">
            <Section>
                {/* <CardContainer>
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Junior Live on Stage Strike" date="September 2018" />
                </CardContainer> */}
                <Placeholder text="PROJECTS" />
            </Section>
        </Layout>
    )
}