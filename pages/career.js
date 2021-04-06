import Layout from 'components/layout'
import Section from 'components/section'
import CardContainer from 'components/cardContainer'
import CareerCard from 'components/careerCard'

import Placeholder from 'components/placeholder'

export default function Career() {
    return (
        <Layout header="Career">
            <Section>
                {/* <CardContainer>
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Attractions Host" employer="The Walt Disney Company" start="October 2020" end="Present" />
                </CardContainer> */}
                <Placeholder text="CAREER" />
            </Section>
        </Layout>
    )
}