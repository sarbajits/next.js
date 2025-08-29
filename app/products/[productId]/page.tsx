import React from 'react'

export default function ProductDetail(
    { params }:
        { params: { productId: String } }
) {

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
