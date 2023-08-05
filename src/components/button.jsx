import { twMerge } from "tailwind-merge";
import { Spinner } from "./index";

export function Button({
    children,
    buttonStyle = "",
    disableStyle = "",
    loadingStyle = "",
    loading = false,
    spinnerStyle = "",
    ...rest
}) {
    if (loading) {
        rest.disabled = true;
    }

    const buttonClass = twMerge(
        "flex justify-center border transform cursor-pointer items-center rounded-md bg-white px-5 py-2 text-base font-semibold text-black transition duration-300 ease-in-out hover:bg-blue-300 focus:outline-none active:scale-90",
        buttonStyle,
        rest?.disabled &&
            `cursor-not-allowed bg-slate-200 hover:bg-slate-200 transition-none active:scale-100 ${disableStyle}`,
        loading && `py-2 ${loadingStyle}`
    );

    const spinnerClass = twMerge("fill-gray-300", spinnerStyle);

    return (
        <button className={buttonClass} type='button' {...rest}>
            {children}
            {loading && <Spinner svgStyle={spinnerClass} />}
        </button>
    );
}
