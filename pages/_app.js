// Import TailwindCSS
import 'tailwindcss/tailwind.css'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
