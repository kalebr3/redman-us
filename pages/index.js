import Layout from 'components/layout'
import DynamicComponent from 'components/DynamicComponent'

import Storyblok from 'lib/storyblok'

export default function Home(props) {
    const story = props.story

    return (
        <Layout header={ story ? story.name : null }>
                { story ? story.content.body.map((blok) => (
                    <DynamicComponent blok={blok} key={blok._uid} />
                )) : null }
        </Layout>
    )
}

export async function getStaticProps(context) {
    let slug = "about-me"

    let params = {
        version: "draft",
    }

    if (context.preview) {
        params.version = "draft"
        params.cv = Date.now()
    }

    let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

    return {
        props: {
            story : data ? data.story : false,
            preview: context.preview || false
        },
        // revalidate: 10,
    }
}