import React from 'react';
import './shoppingCart.css'
import {Button} from '../button/Button';
import {ShopCart} from '../../App';

type ShoppingCartType = {
    toggleShowCart: ()=>void
    cartItems: ShopCart[]
    removeInShopCart: (id: number)=>void
    changeCount: (id: number, count: number) => void
}
export const ShoppingCart = ({toggleShowCart, cartItems, removeInShopCart, changeCount}:ShoppingCartType) => {

    return (
        <div className='cart-container'>
            <div className='shopping-cart'>
                <Button onClick={toggleShowCart} icon="fa-duotone fa-arrow-right-from-bracket" />
                <h3>Shopping Cart</h3>
                <ul className='cart-items'>
                    {cartItems.length === 0 && <span>Cart is empty, <br/> add products from the catalog</span>}
                    {cartItems.length > 0 && cartItems.map(el => {
                        function onClickRemoveHandler() {
                            removeInShopCart(el.id)
                        }
                        function incCounter() {
                            changeCount(el.id, ++el.count)
                        }
                        function decCounter() {
                            if (el.count > 1) {
                                changeCount(el.id, --el.count)
                            } else return
                        }
                        return (
                            <li key={el.id}>
                                <Button onClick={onClickRemoveHandler} icon='fa-solid fa-xmark'/>
                                <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                                    <span>{el.productName}</span>
                                    <b>${el.price * el.count}</b>
                                    <div className='counter'>
                                        <Button onClick={decCounter} icon='fa-regular fa-minus' disabled={el.count === 1}/>
                                        <b>{el.count}</b>
                                        <Button onClick={incCounter} icon='fa-regular fa-plus'/>
                                    </div>
                                </div>
                                <img src={el.src} alt="product"/>
                            </li>
                        )
                    })}
                </ul>
                <span>Total: <b>${cartItems.reduce((acc, el) => {
                    acc += el.price * el.count
                    return acc
                }, 0)}</b></span>
            </div>

        </div>
    );
}