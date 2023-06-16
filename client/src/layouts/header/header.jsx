import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../React-Context-API/StateProvider';

function Header() {

    const [state, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/' className='header__link header__responsive'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>
            <div className="header__search header__responsive">
                <input type="text" className="header__searchInput" id="" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav header__responsive">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className='header__shoppingBasket' />
                        <span className="header__optionLineTwo header__basketCount">{state.basket?.reduce((acc, cur) => acc += cur.quantity, 0)}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header