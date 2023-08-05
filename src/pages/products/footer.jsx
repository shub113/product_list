import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { Flexbox, Text, Button, NA, Spinner } from "../../components/index";
import { UseProductData } from "../../hooks/useProductData";

export function Footer() {
    const productData = UseProductData();

    const isFetching = productData?.isFetching ?? false;
    const setSkip = productData?.setSkip ?? (() => {});
    const start = productData?.data?.skip + 1 ?? <NA />;
    const total = productData?.data?.total ?? <NA />;
    let end = typeof start === "number" ? start + 9 : <NA />;

    if (end > total) {
        end = total;
    }
    console.log(isFetching);
    if (isFetching) {
        return (
            <Flexbox styleFlexbox='py-2 px-4 rounded-lg border-black justify-center md:justify-end gap-3'>
                <Spinner /> Loading...
            </Flexbox>
        );
    }

    return (
        <Flexbox styleFlexbox='py-2 px-4 rounded-lg border-black justify-between md:justify-end gap-3'>
            <Button
                onClick={() => {
                    setSkip(start - 11);
                }}
                disabled={start === 1}
                buttonStyle='px-2'
            >
                <AiFillCaretLeft size={20} />
            </Button>
            <Text>
                {start} to {end} of {total}
            </Text>
            <Button
                onClick={() => {
                    setSkip(end);
                }}
                disabled={end === total}
                buttonStyle='px-2'
            >
                <AiFillCaretRight size={20} />
            </Button>
        </Flexbox>
    );
}
