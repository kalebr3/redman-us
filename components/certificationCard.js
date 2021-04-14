import formatDate from 'lib/formatDate'

export default function CertificationCard({ blok }) {


     return (
        <div className="w-96 bg-white border border-gray-300 p-6 m-1 rounded-2xl tracking-wide shadow-lg">
            <div className="flex items-center">
                { blok.logo.filename ? (<img src={blok.logo.filename} className="w-20" />) : null }
                <div className="leading-5 ml-6 sm">
                    <h4 className="text-lg font-semibold">{blok.name}</h4>
                    <h5 className="font-semibold">{blok.organization}</h5>
                    <h6 className="text-sm font-semibold">{formatDate(blok.date)}</h6>
                </div>
            </div>
        </div>
    )
}
