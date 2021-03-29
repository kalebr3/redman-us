import Layout from '../components/layout'
import Section from '../components/section'
import CardContainer from '../components/cardContainer'
import CareerCard from '../components/careerCard'

export default function Career() {
    return (
        <Layout header="Career">
            <Section>
                <CardContainer>
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Attractions Host" employer="The Walt Disney Company" start="October 2020" end="Present" />
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Entertainment Technician" employer="The Walt Disney Company" start="August 2018" end="October 2020" />
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Network Manager" employer="Polk County Public Schools" start="August 2014" end="August 2018" />
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Lighting Designer" employer="Optimum Technical Services" start="May 2014" end="January 2016" />
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Theatre Technician" employer="Polk State College" start="February 2014" end="May 2016" />
                </CardContainer>
            </Section>
        </Layout>
    )
}