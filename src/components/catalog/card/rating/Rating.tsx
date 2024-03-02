import React, {useState} from 'react';
import './rating.css'
type RatingType = {
    rating: number
}
export const Rating = ({rating, ...props}:RatingType) => {
    const stars = Array(5).fill(0)

    const [currentItem, setCurrentItem] = useState<number>(rating)

    return (
        <div className='rating'>
            {stars.map((el, idx) => {
                const style = idx <= currentItem ? {color:'gold'} : {color:'grey'}
                return (
                    <div key={idx}
                    onClick={()=>setCurrentItem(idx)}
                         className='rating-item'
                    style={style}>
                        <i className="fa-duotone fa-star"></i>
                    </div>
                )
            })}
        </div>
    );
}