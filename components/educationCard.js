function Description({ text }) {
    if (!text) {
        return null
    } else {
        return (
            <div className="mt-4">
                <p className="text-gray-600">{text}</p>
            </div>
        )
    }
}

export default function EducationCard({ img, school, degree, grad, description }) {
    return (
        <div className="max-w-sm bg-white border border-gray-300 p-6 m-1 rounded-md tracking-wide shadow-lg">
            <div className="flex items-center">
                <img src={img} className="w-20 rounded-full border border-gray-300" />
                <div className="leading-5 ml-6 sm">
                    <h4 className="text-lg font-semibold">{degree}</h4>
                    <h5 className="font-semibold">{school}</h5>
                    <h6 className="text-sm font-semibold">Class of {grad}</h6>
                </div>
            </div>
            <Description text={description} />
        </div>
    )
}