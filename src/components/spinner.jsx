import { twMerge } from "tailwind-merge";

export function Spinner({ svgStyle = "", svgSize = "" }) {
    const svgClass = twMerge("stroke-2 fill-gray-500", svgStyle);
    let size = "34px";
    if (svgSize) {
        size = svgSize;
    }
    return (
        <svg
            name='loader'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            focusable='false'
            viewBox='0 0 100 100'
            height={size}
            width={size}
            className={svgClass}
        >
            <path d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'>
                <animateTransform
                    attributeName='transform'
                    attributeType='XML'
                    type='rotate'
                    dur='1s'
                    from='0 50 50'
                    to='360 50 50'
                    repeatCount='indefinite'
                ></animateTransform>
            </path>
        </svg>
    );
}
