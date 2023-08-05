import { twMerge } from "tailwind-merge";

export function Input({
    value,
    setValue,
    beforeComponent = "",
    afterComponent = "",
    parentStyle = "",
    inputParentStyle = "",
    inputStyle = "",
    labelText = "",
    labelStyle = "",
    errorText = "",
    errorStyle = "",
    disbaleStyle = "",
    ...rest
}) {
    const parentClass = twMerge("w-full", parentStyle);
    const labelClass = twMerge("block text-base ml-1 mb-1 ", labelStyle);
    const errorClass = twMerge("block text-sm ml-1 italic text-red-700 ", errorStyle);
    const inputParentClass = twMerge(
        "relative w-full inline-block drop-shadow-md hover:drop-shadow-xl transition duration-300 ease-in-out",
        inputParentStyle
    );
    const inputclass = twMerge(
        "w-full border rounded-lg p-2 border-black/10 focus:outline-none focus:border-slate-500",
        !!beforeComponent && "pl-10",
        !!afterComponent && "pr-10",
        !!errorText && "border-red-200 focus:border-red-500",
        inputStyle,
        rest?.disabled && `bg-slate-200 cursor-not-allowed ${disbaleStyle}`
    );

    return (
        <div className={parentClass}>
            {!!labelText && <label className={labelClass}>{labelText}</label>}
            <div className={inputParentClass}>
                {!!beforeComponent && (
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                        {beforeComponent}
                    </div>
                )}
                <input
                    className={inputclass}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    {...rest}
                />
                {!!afterComponent && (
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>{afterComponent}</div>
                )}
            </div>
            {!!errorText && <label className={errorClass}>{errorText}</label>}
        </div>
    );
}
