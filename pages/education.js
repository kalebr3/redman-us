import Layout from 'components/layout'
import Section from 'components/section'
import CardContainer from 'components/cardContainer'
import EducationCard from 'components/educationCard'

import Placeholder from 'components/placeholder'

export default function Education() {
    return (
        <Layout header="Education">
            <Section title="Schools">
                {/* <CardContainer>
                    <EducationCard img="https://picsum.photos/seed/picsum/200" school="Haines City High School" degree="High School Diploma" grad="2013" />
                </CardContainer> */}
                <Placeholder text="EDUCATION - SCHOOLS" />
            </Section>
            <Section title="Certifications">
                {/* <CardContainer>
                    <EducationCard img="https://picsum.photos/seed/picsum/200" school="International Baccalaureate East" degree="IB Mathematical Studies" grad="2013" />
                </CardContainer> */}
                <Placeholder text="EDUCATION - CERTIFICATIONS" />
            </Section>
        </Layout>
    )
}