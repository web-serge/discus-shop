import {useState} from 'react';
import {data, DataType} from '../../store/data';
import {Card, CategoryType} from './card/Card';
import './products.css'
import {Button} from '../button/Button';
import {ShopCart} from '../../App';

type ProductsType = {
    addToCart: (id:number)=>void
    shoppingCart: ShopCart[]
}
export const Products = ({addToCart, shoppingCart}:ProductsType) => {
    const [discus, setDiscus] = useState<DataType[]>(data)
    const [filter, setFilter] = useState<CategoryType>('all')

    function getFilterDiscus() {
        let filteredDiscus = discus
        if (filter !== 'all') {
            return filteredDiscus.filter(el => el.category === filter)
        } else return filteredDiscus
    }
    const discusMap = getFilterDiscus().map(el => <Card {...el} addToCart={addToCart} key={el.id} shoppingCart={shoppingCart}/>)

    return (
        <section className='catalog'>
            <div className='container'>
                <h3>Select a category</h3>
                <div className='button-group'>
                    <Button onClick={() => setFilter('all')} name='All' className={filter === 'all' ? 'active' : ''}/>
                    <Button onClick={() => setFilter('selective')} name='Selective'
                            className={filter === 'selective' ? 'active' : ''}/>
                    <Button onClick={() => setFilter('wild')} name='Wild'
                            className={filter === 'wild' ? 'active' : ''}/>
                </div>
                <div className='grid'>{discusMap}</div>
            </div>
        </section>
    )
}