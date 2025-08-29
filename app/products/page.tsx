import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: {
        absolute: "Product"
    }
};

export default function ProductList() {
    return (
        <>
            <h1>Products</h1>
            {/* <Link href={}>a</Link> */}
        </>
    )
}
