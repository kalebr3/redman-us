import Layout from 'components/layout'

import Storyblok from 'lib/storyblok'

export default function Home(props) {
    return (
        <Layout header="About Me">
            <div className="grid place-items-center h-96 text-gray-500 text-xl">
                { props.story ? props.story.name : 'HELLO WORLD!' }
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    let slug = "home"

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
        revalidate: 10,
    }
}