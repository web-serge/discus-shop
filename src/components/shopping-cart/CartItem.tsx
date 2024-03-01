import {Button} from '../button/Button';
import React, {ChangeEvent} from 'react';
import {getNewPrice} from '../../store/data';

type CartItem = {
    count: number
    removeInShopCart: (id: number) => void
    changeCount: (id: number, count: number) => void
    id: number
    src: string
    price: number
    productName: string
    isDone: boolean
    selectItemInCart: (id: number, value: boolean) => void
    discount: number | null
}
export const CartItem = ({
                             id,
                             src,
                             count,
                             price,
                             productName,
                             changeCount,
                             isDone,
                             selectItemInCart,
                             discount,
                             ...props
                         }: CartItem) => {
    function onClickRemoveHandler() {
        props.removeInShopCart(id)
    }

    function incCounter() {
        changeCount(id, ++count)
    }

    function decCounter() {
        if (count > 1) {
            changeCount(id, --count)
        } else return
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        selectItemInCart(id, e.currentTarget.checked)
    }


    return (
        <tr>
            <td>{productName}</td>
            <td><b>${getNewPrice(discount, price)}</b></td>
            <td className='counter'>
                <Button onClick={decCounter} icon='fa-regular fa-minus' disabled={count === 1} className={count === 1 ? 'stop' : ''}/>
                <b>{count}</b>
                <Button onClick={incCounter} icon='fa-regular fa-plus' className={count < 1 ? 'stop' : ''}/>
            </td>
            <td className='check'><input type="checkbox" checked={isDone} onChange={onChangeHandler}/></td>
            <td><img src={src} alt="product"/></td>
            <td><Button onClick={onClickRemoveHandler} icon='fa-solid fa-xmark'/></td>
        </tr>
    )
}