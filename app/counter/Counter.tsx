"use client"
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`
    }, [counter])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => { setCounter(counter + 1) }}
                className='bg-blue-400 p-2 rounded-2xl m-2'
            >Click Me</button>
        </div>
    )
}
