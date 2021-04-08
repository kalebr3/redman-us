export default async function preview(req, res) {
    // Check the secret and next parameters
    if (
        req.query.secret !== process.env.PREVIEW_SECRET_TOKEN ||
        !req.query.slug
    ) {
        return res.status(401).json({ message: 'Invalid Token' })
    }

    // Enable preview mode by setting the cookie
    res.setPreviewData({})

    // Set cookie to None, so it can be read by storyblok iframe
    const cookies = res.getHeader('Set-Cookie')
    res.setHeader('Set-Cookie', cookies.map((cookie) => cookie.replace('SameSite=Lax', 'SameSite=None')))

    // Redirect to entry location
    let slug = req.query.slug

    // Handle home slug
    if (slug === 'home') {
        slug = ''
    }

    // Redirect to path from entry
    res.redirect(`/${slug}`)
}