import React from 'react';
import './card.css'
import {Rating} from './rating/Rating';
import {Button} from '../../button/Button';
import {ShopCart} from '../../../App';
import {getNewPrice} from '../../../store/data';
export type CategoryType = 'selective' | 'wild' | 'all'
export type ProductItemType = {
    src: string
    productName: string
    ifStock: boolean
    rating: number
    price: number
    discount: null | number
    category: CategoryType
    id: number

} & { addToCart: (id: number) => void } & { cartItems: ShopCart[] }
export const Card = (props: ProductItemType) => {
    const {src, productName, ifStock, rating, price, discount, id, addToCart,cartItems, ...restProps} = props

     function onClickAddCartHandler() {
        addToCart(id)
    }

    const ifAdded = cartItems.find(el => el.id === id)
    return (
        <div className='card'>
            {discount && <span className='discount'>{discount}%</span>}
            <div className='image-container'>
                <img src={src} alt="product"/>
            </div>
            <div className='card-info'>
            <h2>{productName}</h2>
                <small className={!ifStock ? 'out-of-stock' : ''}>
                    {ifStock ? 'in stock' : 'OUT OF STOCK'}
                </small>
                <div>
                    <Rating rating={rating}/> <span>{rating}</span>
                </div>
                {discount && <div>
                    <span className='price old'>${price}</span>
                    <span className='price'>${getNewPrice(discount, price)}</span>
                </div>}
                {!discount && <div>
                    <span className='price'>${price}</span>
                </div>}
            </div>
            <div className='hide-buttons'>
                <Button onClick={()=>{}} icon='fa-duotone fa-heart'/>
                <Button onClick={()=>{}} icon='fa-duotone fa-eye'/>
            </div>
            <Button onClick={onClickAddCartHandler}
                    disabled={!ifStock}
                    name={ifAdded ? 'Remove' : !ifStock ? 'Not available' : 'Add to cart'}
                    className={ifAdded ? 'add-to-cart red' : 'add-to-cart'}
                    icon={ifAdded ? 'fa-duotone fa-cart-minus' : !ifStock ? 'fa-duotone fa-cart-circle-xmark' : 'fa-duotone fa-cart-plus'}/>
        </div>
    );
};