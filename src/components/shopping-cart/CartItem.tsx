import React from 'react';


export type CartType = {
    src: string
    price: number
    productName: string
}
export const CartItem = ({src, productName, price, ...props}: CartType) => {
    return (
        <>

            <div>
                <span>{productName}</span>
                <span>кол-во</span>
                <span>{price}</span>
            </div>
            <div>
                <img src={src} alt="product"/>
            </div>
        </>
    );
};