import {useState} from 'react';
import {data, DataType} from '../../store/data';
import {Card, CategoryType} from './card/Card';
import './products.css'
import {Button} from '../button/Button';
import {ShopCart} from '../../App';

type ProductsType = {
    addToCart: (id:number)=>void
    cartItems: ShopCart[]
}
// type SortType = 'name' | 'price'
export const Products = ({addToCart, cartItems}:ProductsType) => {
    let catalogData = data;

    // const [discus, setDiscus] = useState<DataType[]>(data)
    const [filter, setFilter] = useState<CategoryType>('all')
    function getFilterDiscus() {
        if (filter !== 'all') {
            return catalogData.filter(el => el.category === filter)
        } else return catalogData
    }

    // SORT
/*    const [sort, setSort] = useState<SortType>('price')
    function sortCatalog() {
        if (sort === 'price') {
            return catalogData.sort((a,b) => a.price - b.price)
        }
        if (sort === 'name') {
            return catalogData.sort((a,b) => a.productName.localeCompare(b.productName))
        }

    }*/
    const discusMap = getFilterDiscus().map(el => <Card {...el} addToCart={addToCart} key={el.id} cartItems={cartItems}/>)

    return (
        <section className='catalog'>
            <div className='container'>
                <h3 id='shop'>Select a category</h3>
                <div className='button-group'>
                    <Button onClick={() => setFilter('all')} name='All' className={filter === 'all' ? 'active' : ''}/>
                    <Button onClick={() => setFilter('selective')} name='Selective'
                            className={filter === 'selective' ? 'active' : ''}/>
                    <Button onClick={() => setFilter('wild')} name='Wild'
                            className={filter === 'wild' ? 'active' : ''}/>
                </div>
                <div>
    {/*                <select name="select" value={sort}>
                        <option value="$">По цене</option>
                        <option value="name">По имени</option>
                    </select>*/}
  </div>
                <div className='grid'>{discusMap}</div>
            </div>
        </section>
    )
}