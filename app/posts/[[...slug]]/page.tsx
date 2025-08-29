import React from 'react'

// export default async function Post(
//     { params }: { params: Promise<{ slug: String[] }> }
// ) {

//     const { slug } = await params;

//     if (slug.length == 2) {
//         return (
//             <h1>You are viewing post {slug[0]}, dated: {slug[1]}</h1>
//         )
//     } else if (slug.length == 1) {
//         return (
//             <h1>You are viewing post {slug[0]}</h1>
//         )
//     }

//     return <h1>All posts</h1>
// }

export default function Post(
    { params }: { params: { slug: string[] } }
) {
    const slug = params.slug ?? [];

    if (slug.length === 2) {
        return <h1>You are viewing post {slug[0]}, dated: {slug[1]}</h1>;
    } else if (slug.length === 1) {
        return <h1>You are viewing post {slug[0]}</h1>;
    }

    return <h1>All posts</h1>;
}
