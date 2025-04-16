import React from 'react'

const Spinner = () => {
    return (
        /* From Uiverse.io by devAaus */
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div
                className="w-8 h-8 border-3 border-transparent text-white text-4xl animate-spin flex items-center justify-center border-t-white rounded-full"
            >
                <div
                    className="w-6 h-6 border-2 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                ></div>
            </div>
        </div>

    )
}

export default Spinner