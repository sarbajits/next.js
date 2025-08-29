import React from 'react'

export default function AllReviews(
    { params }:
        { params: { productId: String } }
) {

    const productId = params.productId;

    return (
        <>
            <h1>All reviews for product {productId}</h1>
        </>
    )
}