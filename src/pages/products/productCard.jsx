import { MdDiscount } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Card, Flexbox, Text, NA } from "../../components/index";

export function ProductCard({ productData }) {
    return (
        <Card styleCard='mb-5 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-[minmax(100px,_1fr)_minmax(400px,_3fr)] '>
                <div className='grid place-items-center md:place-items-start '>
                    <img height={100} width={100} src={productData?.thumbnail} />
                    <Text>
                        <span className='font-semibold'>{productData?.title ?? <NA />}</span> (
                        {productData?.brand ?? <NA />})
                    </Text>
                </div>
                <div className='grid place-items-start mt-3 bg-stone-100 p-3 rounded-lg md:mt-0'>
                    <div className='flex justify-center w-full gap-5 md:block '>
                        <Flexbox styleFlexbox='gap-1'>
                            <MdDiscount className='text-emerald-500' /> {productData?.price ?? <NA />}/-
                        </Flexbox>
                        <Flexbox styleFlexbox='gap-1'>
                            <AiFillStar className='text-blue-500' /> {productData?.rating ?? <NA />}
                        </Flexbox>
                    </div>

                    {productData?.description ?? <NA />}
                </div>
            </div>
        </Card>
    );
}
