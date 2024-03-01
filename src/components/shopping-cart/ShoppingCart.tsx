import React, {ChangeEvent, RefObject} from 'react';
import './shoppingCart.css'
import {Button} from '../button/Button';
import {ShopCart} from '../../App';
import {CartItem} from './CartItem';
import {getNewPrice} from '../../store/data';

type ShoppingCartType = {
    toggleShowCart: () => void
    cartItems: ShopCart[]
    removeInShopCart: (id: number) => void
    changeCount: (id: number, count: number) => void
    selectItemInCart: (id: number, isDone: boolean) => void
    select: boolean
    toggleSelect: (value: boolean) => void
    pay: () => void
}
export const ShoppingCart = ({
                                 toggleShowCart,
                                 cartItems,
                                 removeInShopCart,
                                 changeCount,
                                 selectItemInCart,
                                 select,
                                 toggleSelect,
                                 pay,
                             }: ShoppingCartType) => {

    // Суммируем все выбранные товары с учетом их количества
    function getTotalSum() {
        return cartItems.filter(el => el.isDone).reduce((acc, el) => {
            // acc += el.price * el.count
            // acc += el.price * (1 - el.discount / 100)
            if (el.discount !==null) {
                return  acc += el.price * (1 - el.discount / 100) * el.count
            } else return acc += el.price * el.count
        }, 0)
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        toggleSelect(e.currentTarget.checked)
    }

    const mappingsCart = cartItems.map(el => <CartItem {...el}
        key={el.id}
                                                       discount={el.discount}
                                                       removeInShopCart={removeInShopCart}
                                                       changeCount={changeCount}
                                                       selectItemInCart={selectItemInCart}/>)
    return (
        <div className='cart-container'>
            <div className='shopping-cart'>
                <Button onClick={toggleShowCart} icon="fa-duotone fa-arrow-right-from-bracket" className='toggle'/>
                <h3>Shopping Cart</h3>
                {cartItems.length === 0 && <span>Cart is empty, <br/> add products from the catalog</span>}
                <table className="iksweb">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>
                            {cartItems.length > 0 && <div><span>All</span> <input type="checkbox"
                                                                                         checked={select}
                                                                                         onChange={onChangeHandler}
                            />
                            </div>}
                        </th>
                        <th>Photo</th>
                        <th><i className="fa-duotone fa-cart-circle-xmark"></i></th>
                    </tr>
                    {cartItems.length > 0 && mappingsCart}
                    </tbody>
                </table>
                <span>Total: <b>${getTotalSum()}</b></span>
                <Button onClick={pay} name='Pay'
                        icon='fa-duotone fa-credit-card'
                        className='pay-button'
                        disabled={cartItems.filter(el=>el.isDone).length === 0}/>
            </div>

        </div>
    );
}

