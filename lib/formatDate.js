export default function formatDate(rawDate) {
    const date = new Date(rawDate.slice(0, 10));
    
    return (
        new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
        }).format(date)
    )
}