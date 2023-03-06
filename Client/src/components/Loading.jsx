import React from 'react'

function Loading() {
    return (
        <div className="flex justify-center items-center p-2 bg-[#213547]">
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm18 0a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-9.172-6.172a4 4 0 015.656 0l1.414 1.414a6 6 0 00-8.485 0l1.415-1.414z"></path>
            </svg>
        </div>
    )
}

export default Loading