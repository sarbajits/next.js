import { notFound } from 'next/navigation';
import React from 'react'

export default function Review(
    { params }:
        { params: { productId: string, reviewId: string } }
) {

    const { productId, reviewId } = params;

    if (parseInt(productId) > 1000) {
        notFound();
    }

    return (
        <>
            <h1>{reviewId}th review for product {productId}</h1>
        </>
    )
}