import React from "react";
import { twMerge } from "tailwind-merge";

export default function Featurecard(props: {
    title: string,
    description: string,
    children?: React.ReactNode;
    className? : string
}) {
    const {title, description, children, className} = props;
    return(
        <div className={twMerge("bg-neutral-700/30 border rounded-3xl border-white/10 p-6 flex-col items-center justify-center text-center", className)}>
            <div className="aspect-video flex items-center justify-center">{children}</div>
            <div>
                <h3 className="text-3xl text-white font-medium mt-6 capitalize">{title}</h3>
                <p className="text-white/15 mt-2">{description}</p>
            </div>
        </div>
    )
}