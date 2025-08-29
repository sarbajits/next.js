import { Metadata } from 'next';
import React from 'react'

type Props = {
    params: { productId: string }
}

// export async function generateMetadata(
//     { params }: Props
// ): Promise<Metadata> {
//     const productId = params.productId

//     return {
//         title: `Product ${productId}`,
//         description: `Details about product ${productId}`
//     }
// }

export function generateMetadata(
    { params }: Props
): Metadata {
    const productId = params.productId

    return {
        title: `Product ${productId}`,
        description: `Details about product ${productId}`
    }
}

export default function ProductDetail({ params }: Props) {

    const productId = params.productId;

    return (
        <>
            <h1>Product Detail {productId}</h1>
        </>
    )
}

// export async function ProductDetail2(
//     { params }:
//         { params: Promise<{ productId: String }> }
// ) {

//     const productId = (await params).productId;

//     return (
//         <>
//             <h1>Product Detail {productId}</h1>
//         </>
//     )
// }
