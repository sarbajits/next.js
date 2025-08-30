"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { use } from "react";

export default function Article({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "od" | "hi" }>;
}) {

    const { articleId } = use(params);
    const { lang } = use(searchParams);

    const path = usePathname();

    const languages = [
        { langName: "English", langParam: "en" },
        { langName: "Odia", langParam: "od" },
        { langName: "Hindi", langParam: "hi" },
    ];

    const router = useRouter();
    const handleClick = () => {
        // alert("Hello");
        router.push('/login');
    };

    return (
        <div>

            <button className="bg-emerald-400 p-2 m-4 rounded-2xl" onClick={() => handleClick()}>Click me</button>

            {articleId} : {lang}
            <div className="p-2">
                {languages.map((a) => (
                    <Link
                        key={a.langParam}
                        href={`${path}?lang=${a.langParam}`}
                        className={`p-2 border-2 border-amber-50 m-2 rounded-2xl
                            ${lang === a.langParam ? "bg-blue-400" : ""}`}

                    >
                        Change to {a.langName}
                    </Link>
                ))}
            </div>
        </div>
    );
}
