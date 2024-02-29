import React, {useState} from 'react';
import './App.css';
import './root.css';
import {Header} from './components/header/Header';
import {Welcome} from './components/home/Welcome';
import {Products} from './components/products/Products';
import {ShoppingCart} from './components/shopping-cart/ShoppingCart';
import {data, DataType} from './store/data';

export type ShopCart = DataType & { count: number }
function App() {
    const [isCart, setIsCart] = useState(false)
    const [shoppingCart, setShoppingCart] = useState<ShopCart[]>([])
    // add product to cart
    function addToCart(id:number) {
        let current = data.find(el => el.id === id)
        if (current) {
            setShoppingCart([...shoppingCart, {...current, count: 1}])
        }
    }

    function changeCount(id:number, count: number) {
        setShoppingCart(shoppingCart.map(el => el.id === id ? {...el, count} : el))
    }
    // delete in shop cart
    function removeInShopCart(id: number) {
        setShoppingCart(shoppingCart.filter(el => el.id !== id))
    }
    // show or hide cart
    function toggleShowCart() {
        setIsCart(!isCart)
    }
    // сколько всего товаров в корзине
    function getAllCount() {
        return shoppingCart.reduce((acc, el) => {
            acc +=el.count
            return acc
        },0)
    }
  return (
    <div className="App">
        <Header toggleShowCart={toggleShowCart} numberGoods={getAllCount()}/>
        <Welcome />
        <Products addToCart={addToCart} shoppingCart={shoppingCart}/>
        {isCart && <ShoppingCart
            toggleShowCart={toggleShowCart}
            cartItems={shoppingCart}
            changeCount={changeCount}
            removeInShopCart={removeInShopCart}/>}
    </div>
  );
}

export default App;
