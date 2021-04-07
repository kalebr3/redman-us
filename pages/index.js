import Layout from 'components/layout'
import DynamicComponent from 'components/DynamicComponent'

import Storyblok from 'lib/storyblok'
import useStoryblok from 'lib/storyblok-hook'
import { getPageData, getGlobalData } from 'lib/api'

export default function Home({ global, story, preview }) {
    // Use Storyblok hook to enable live updates
    story = useStoryblok(story, preview)

    return (
        <Layout data={global} header={ story ? story.name : null }>
                { story ? story.content.body.map((blok) => (
                    <DynamicComponent blok={blok} key={blok._uid} />
                )) : null }
        </Layout>
    )
}

export async function getStaticProps(context) {
    let slug = "home"

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