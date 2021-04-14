export default async function exit(_, res) {
    // Exit the current user from preview mode
    res.clearPreviewData()

    // Set the cookies to None
    const cookies = res.getHeader('Set-Cookie')
    res.setHeader('Set-Cookie', cookies.map((cookie) => cookie.replace('SameSite=Lax', 'SameSite=None')))

    // Redirect user back to index page
    res.redirect('/')
}
