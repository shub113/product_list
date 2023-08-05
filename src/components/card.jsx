import { twMerge } from "tailwind-merge";

export function Card({ children, styleCard = "", ...rest }) {
    const cardClass = twMerge("w-full rounded-md border hover:drop-shadow-md", styleCard);

    return (
        <div className={cardClass} {...rest}>
            {children}
        </div>
    );
}
