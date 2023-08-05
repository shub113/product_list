import { MdDiscount } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Card, Flexbox, Text, NA } from "../../components/index";

export function ProductCard({ productData }) {
    return (
        <Card styleCard='mb-5 p-5'>
            <div className='grid grid-cols-[200px_minmax(400px,_1fr)] '>
                <div>
                    <img height={100} width={100} src={productData?.thumbnail} />
                    <Text>
                        <span className='font-semibold'>{productData?.title ?? <NA />}</span> (
                        {productData?.brand ?? <NA />})
                    </Text>
                </div>
                <div>
                    <Flexbox>
                        <MdDiscount className='text-emerald-500' /> {productData?.price ?? <NA />}
                    </Flexbox>
                    <Flexbox>
                        <AiFillStar className='text-blue-500' /> {productData?.rating ?? <NA />}
                    </Flexbox>
                    {productData?.description ?? <NA />}
                </div>
            </div>
        </Card>
    );
}
