// Custom Logic Imports
import { getPageData, getGlobalData } from "lib/api";
import useStoryblok from "lib/storyblok-hook";
// Custom Component Imports
import Layout from "components/layout";
import DynamicComponent from "components/dynamicComponent";

export default function Projects({ global, story, preview }) {
  story = useStoryblok(story, preview);

  return (
    <Layout data={global} header={story ? story.name : null}>
      {story
        ? story.content.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </Layout>
  );
}

export async function getStaticProps(context) {
  let slug = "projects";

  let params = {
    version: "published",
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { globalData } = await getGlobalData(params);
  let { pageData } = await getPageData(slug, params);

  return {
    props: {
      global: globalData ? globalData.story : false,
      story: pageData ? pageData.story : false,
      preview: context.preview || false,
    },
  };
}
