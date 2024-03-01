import React, {useEffect, useState} from 'react';
import './App.css';
import './root.css';
import {Header} from './components/header/Header';
import {Welcome} from './components/home/Welcome';
import {Products} from './components/products/Products';
import {ShoppingCart} from './components/shopping-cart/ShoppingCart';
import {data, DataType} from './store/data';

export type ShopCart = DataType & { count: number, isDone: boolean }

function App() {
    const [isCart, setIsCart] = useState(false)
    const [cartItems, setCartItems] = useState<ShopCart[]>([])

    // add product to cart
    function addToCart(id: number) {
        // #1
        /*       let current = data.find(el => el.id === id)
               if (current) {
                   setCartItems([...cartItems, {...current, count: 1, isDone: true}])
               }*/
        // #2
        /*        const selectedProduct = data.filter(el => el.id === id)[0]

                setCartItems([...cartItems, {...selectedProduct, count: 1, isDone: true}])*/

        // #3
        if (cartItems.find(el => el.id === id)) {
            setCartItems(cartItems.filter(el => el.id !== id))
        } else {
            const selectedProduct = data.filter(el => el.id === id)[0]
            setCartItems([...cartItems, {...selectedProduct, count: 1, isDone: true}])
        }
    }

    function changeCount(id: number, count: number) {
        setCartItems(cartItems.map(el => el.id === id ? {...el, count} : el))
    }

    // delete in shop cart
    function removeInShopCart(id: number) {
        setCartItems(cartItems.filter(el => el.id !== id))
    }

    // show or hide cart
    function toggleShowCart() {
        setIsCart(!isCart)
    }

    // сколько всего товаров в корзине
    function getAllCount() {
        return cartItems.reduce((acc, el) => {
            acc += el.count
            return acc
        }, 0)
    }

    // выбрать все товары
    let [select, setSelect] = useState<boolean>(true)

    function toggleSelect(isDone: boolean) {
        setSelect(!select)
        setCartItems(cartItems.map(el => el.isDone !== isDone ? {...el, isDone} : el))
    }

    // выбрать товар в корзине
    function selectItemInCart(id: number, isDone: boolean) {
        setCartItems(cartItems.map(el => el.id === id ? {...el, isDone} : el))
    }

    // купить выбранные товары
    function pay() {
        setTimeout(()=> setCartItems(cartItems.filter(el => !el.isDone)), 300)
    }

    // проверяем, выбраны ли все товары
    useEffect(() => {
        // проверяем все ли элементы массива подходят под заданное условие
        /*const controlAllSelect = cartItems.every(item => item.isDone);*/
        setSelect(cartItems.every(item => item.isDone));
    }, [cartItems]);

    return (
        <div className="App">
            <Header toggleShowCart={toggleShowCart} numberGoods={getAllCount()}/>
            <Welcome/>
            <Products addToCart={addToCart} cartItems={cartItems}/>
            {isCart && <ShoppingCart
                toggleShowCart={toggleShowCart}
                cartItems={cartItems}
                changeCount={changeCount}
                selectItemInCart={selectItemInCart}
                removeInShopCart={removeInShopCart}
                select={select}
                toggleSelect={toggleSelect}
                pay={pay}
            />}
        </div>
    );
}

export default App;
