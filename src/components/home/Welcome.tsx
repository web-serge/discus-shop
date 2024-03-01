import {Button} from '../button/Button';
import './welcome.css'

export const Welcome = () => {
    return (
        <section className='welcome'>
            <div className='container'>
                <span className='leckerli-one-regular'>Welcome to Discus.com</span>
                <h1>Quolity Discus <br/> fish for sale</h1>
                <a href='#shop'
                   className='button'>Shop now <i className="fa-regular fa-arrow-down"></i></a>
            </div>
        </section>
    )
}