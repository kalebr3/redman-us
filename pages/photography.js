import Layout from 'components/layout'
import Section from 'components/section'

import Placeholder from 'components/placeholder'

import { getPageData, getGlobalData } from 'lib/api'
import useStoryblok from 'lib/storyblok-hook'

export default function Photography({ global, story, preview }) {
    story = useStoryblok(story, preview)

    return (
        <Layout data={global} header={ story ? story.name : null }>
            <Section>
                <Placeholder text="PHOTOGRAPHY" />
            </Section>
        </Layout>
    )
}

export async function getStaticProps(context) {
    let slug = "photography"

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