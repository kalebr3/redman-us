import Layout from 'components/layout'
import Section from 'components/section'
// import CardContainer from 'components/cardContainer'
// import CareerCard from 'components/careerCard'

import Placeholder from 'components/placeholder'

import { getPageData, getGlobalData } from 'lib/api'
import useStoryblok from 'lib/storyblok-hook'

export default function Career({ global, story, preview }) {
    story = useStoryblok(story, preview)

    return (
        <Layout data={global} header={ story ? story.name : null }>
            <Section>
                {/* <CardContainer>
                    <CareerCard img="https://picsum.photos/seed/picsum/200" title="Attractions Host" employer="The Walt Disney Company" start="October 2020" end="Present" />
                </CardContainer> */}
                <Placeholder text="CAREER" />
            </Section>
        </Layout>
    )
}

export async function getStaticProps(context) {
    let slug = "career"

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