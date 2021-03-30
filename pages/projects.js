import Layout from '../components/layout'
import Section from '../components/section'
import CardContainer from '../components/cardContainer'
import ProjectCard from '../components/projectCard'

export default function Projects() {
    return (
        <Layout header="Projects">
            <Section>
                <CardContainer>
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Junior Live on Stage Strike" date="September 2018" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Junior Dance Party Install" date="September - December 2018" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Wine & Dine Half Marathon Weekend" date="November 2018" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Holiday Filming" date="December 2018" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="ESPN Cheer Season" date="January - May 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="NFL Pro Bowl Week" date="January 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Princess Half Marathon Weekend" date="February 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="ESPN WWoS Arena Video Upgrade" date="March 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Star Wars Rival Run Weekend" date="April 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Florida Special Olympics Summer Games" date="May 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney H2O Glow" date="May - August 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Wine & Dine Half Marathon Weekend" date="November 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Rise of the Resistance Dedication" date="December 2019" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Walt Disney World Marathon Weekend" date="January 2020" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Disney Princess Half Marathon Weekend" date="February 2020" />
                    <ProjectCard img="https://picsum.photos/seed/picsum/200" name="Voyage of the Little Mermaid Lighting Upgrade" date="March 2020" />
                </CardContainer>
            </Section>
        </Layout>
    )
}