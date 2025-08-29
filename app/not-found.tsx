import React from 'react'

export default function notfound() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl border-b-2 border-gray-400 pb-1 mb-2'>Review not found</h1>
            <p className='text-sm text-cyan-400'>Check your url please</p>
        </div>
    )
}
