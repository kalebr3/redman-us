export default function CareerCard({ img, employer, title, start, end, description }) {
    return (
        <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
            <div className="flex items-center mb-4">
                <img src="https://picsum.photos/seed/picsum/200" className="w-20 rounded-full border-2 border-gray-300" />
                <div className="leading-5 ml-6 sm">
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <h5 className="font-semibold">{employer}</h5>
                    <h6 className="text-sm font-semibold">{start} - {end}</h6>
                </div>
            </div>
            <div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}