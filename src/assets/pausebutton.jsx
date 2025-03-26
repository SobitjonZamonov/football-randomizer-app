import React from "react";


export const PauseButton = (props) => {
    return (
        <div {...props} className="px-[20px] py-[20px] cursor-pointer rounded-3xl bg-amber-600" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    )
}