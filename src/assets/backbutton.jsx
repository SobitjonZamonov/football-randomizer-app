import React from "react";


export const BackButton = (props) => {
    return (
        <div {...props} className="px-[20px] py-[10px] text-[#fff] bg-amber-600 rounded-4xl cursor-pointer hover:bg-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </div>
    )
}