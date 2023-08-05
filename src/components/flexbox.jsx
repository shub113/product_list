import { twMerge } from "tailwind-merge";

export function Flexbox({ children, styleFlexbox = "", ...rest }) {
    const flexclass = twMerge("flex items-center justify-start", styleFlexbox);

    return (
        <div className={flexclass} {...rest}>
            {children}
        </div>
    );
}
