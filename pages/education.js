import Layout from 'components/layout'
import Section from 'components/section'
import CardContainer from 'components/cardContainer'
import EducationCard from 'components/educationCard'

import Placeholder from 'components/placeholder'

import { getPageData, getGlobalData } from 'lib/api'
import useStoryblok from 'lib/storyblok-hook'

export default function Education({ global, story, preview }) {
    story = useStoryblok(story, preview)

    return (
        <Layout data={global} header={ story ? story.name : null }>
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

export async function getStaticProps(context) {
    let slug = "education"

    let params = {
        version: "published",
    }

    if (context.preview) {
        params.version = "draft"
        params.cv = Date.now()
    }

    let { globalData } = await getGlobalData(params)
    let { pageData } = await getPageData(slug, params)

    return {
        props: {
            global: globalData ? globalData.story : false,
            story: pageData ? pageData.story : false,
            preview: context.preview || false
        },
        revalidate: 10,
    }
}