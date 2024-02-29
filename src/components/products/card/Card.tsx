import React from 'react';
import './card.css'
import {Rating} from './rating/Rating';
import {Button} from '../../button/Button';
import {ShopCart} from '../../../App';
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
    addToCart: (id:number)=>void
    shoppingCart: ShopCart[]
}
export const Card = (props: ProductItemType) => {
    const {src, productName, ifStock, rating, price, discount, id, addToCart,shoppingCart, ...restProps} = props

    function getNewPrice() {
        if (discount) return Math.ceil(price * (1 - discount / 100))
    }

    function onClickAddCartHandler() {
        addToCart(id)
    }

    const r = shoppingCart.find(el => el.id === id)
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
                    <span className='price'>${getNewPrice()}</span>
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
                    disabled={!ifStock || !!r}
                    // name={'Add to cart'}
                    name={r ? 'In cart' : 'Add to cart'}
                    className='add-to-cart'
                    icon='fa-duotone fa-cart-plus'/>
        </div>
    );
};