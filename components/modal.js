import CloseIcon from 'components/svg/closeIcon'

export default function Modal({ onClick, header, body, footer }) {
    return (
        <>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none inset-0">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                        {/*header*/}
                        { header ? (
                            <div className="flex items-start justify-between p-5 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                {header}
                                </h3>
                                <button
                                className="p-1 ml-8 ml-autoborder-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none"
                                onClick={onClick}
                                >
                                <CloseIcon />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-start justify-between p-5 rounded-t">
                                <button
                                className="p-1 ml-auto border-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none"
                                onClick={onClick}
                                >
                                <CloseIcon />
                                </button>
                            </div>
                        ) }
                        {/*body*/}
                        { body ? (
                            <div className="relative p-6 flex-auto border-t border-solid border-blueGray-200">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                {body}
                                </p>
                            </div>
                        ) : null }
                        {/*footer*/}
                        { footer ? (
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClick}
                                >
                                Close
                                </button>
                            </div>
                        ) : null }
                    </div>
                </div>
            </div>
        </>
    )
}
