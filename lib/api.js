// Custom Logic Imports
import Storyblok from "lib/storyblok";

export async function getPageData(slug, params) {
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  return {
    pageData: data,
  };
}

export async function getGlobalData(params) {
  let { data } = await Storyblok.get(`cdn/stories/global`, params);

  return {
    globalData: data,
  };
}
