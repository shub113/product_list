import { twMerge } from "tailwind-merge";

function getClassByType(type) {
    switch (type) {
        case "title":
            return "text-black text-lg font-semibold";
        case "subtitle":
            return "text-zinc-500 text-base font-medium";
        default:
            return "";
    }
}

export function Text({ children, styleText = "", type = "", ...rest }) {
    const textClass = twMerge("text-ellipsis", type && getClassByType(type), styleText);

    return (
        <p className={textClass} {...rest}>
            {children}
        </p>
    );
}
