import { useEffect, useState } from  'react'
import Storyblok from 'lib/storyblok'

export default function useStoryblok(originalStory) {
    let [story, setStory] = useState(originalStory);

    // Adds the events for updating the visual editor
    function initEventListeners() {
        if (window.storyblok) {
            window.storyblok.init();

            // Reload on Next.js page on save or publish event in the visual editor
            window.storyblok.on(["change", "published"], () => location.reload(true));

            // Live update the story on input events
            window.storyblok.on("input", (event) => {
                if (event.story.content._uid === story.content._uid) {
                    event.story.content = window.storyblok.addComments(
                        event.story.content,
                        event.story.id
                    );
                    setStory(event.story);
                }
            });
        }
    }

    // Appends the bridge script tag to document
    function addBridge(callback) {
        // Check to see if the script is already present
        const existingScript = document.getElementById("storyblokBridge");
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = `https://app.storyblok.com/f/storyblok-latest.js?t=${Storyblok.accessToken}`;
            script.id = "storyblokBridge";
            document.body.appendChild(script);
            script.onload = () => {
                // Once script loads, init event listeners
                callback();
            };
        } else {
            callback();
        }
    }

    useEffect(() => {
        // First load bridge then init event listeners
        addBridge(initEventListeners);
    });

    return story;
}