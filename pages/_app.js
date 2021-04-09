import Head from 'next/head'

// Import TailwindCSS
import 'tailwindcss/tailwind.css'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
