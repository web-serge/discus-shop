import logo from '../../assets/images/logo.png'
import './header.css'
type HeaderType = {
    toggleShowCart: ()=>void
    numberGoods: number
}
export const Header = ({toggleShowCart, numberGoods}: HeaderType) => {
    return (
        <header>
            <div className='container'>
                <a href="#">
                    <img src={logo} alt="logotip"/>
                </a>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Discus Blog</a></li>
                        <li className='cart-icon'>
                            <a href="#" onClick={toggleShowCart}>
                                <i className="fa-duotone fa-cart-shopping">
                                </i>
                            </a>
                            <span>{numberGoods}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}