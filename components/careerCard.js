import { useState } from 'react'

import MoreIcon from 'components/svg/moreIcon'
import Modal from 'components/modal'

export default function CareerCard({ blok }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal ? (<Modal onClick={() => setShowModal(false)} header={blok.title} body={blok.description} footer={false} />) : null}

            <div className="w-96 bg-white border border-gray-300 p-6 m-1 rounded-2xl tracking-wide shadow-lg">
                <div className="flex items-center">
                    <img src={blok.logo.filename} className="w-20" />
                    <div className="leading-5 ml-6 sm">
                        <h4 className="mb-1 text-lg font-semibold">{blok.title}</h4>
                        <h5 className="font-semibold">{blok.employer}</h5>
                        <h6 className="mt-1 text-sm font-semibold">{blok.start_date} - {blok.end_date}</h6>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => setShowModal(true)}>
                        <MoreIcon />
                    </button>
                </div>
            </div>
        </>
    )
}