import React from 'react'
import "../../StyleSheet/Navbar.scss"
import { FaShoppingCart } from 'react-icons/fa';
import SearchInput from "./SearchInput"
import SubHeader from './SubHeader';
import Aside from './Aside';

const index = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='max-w-6xl mx-auto px-10 lg:px-0'>
                    <div className='navbar-container'>
                        <div className='navbar-content'>
                            <div className="navbar-brand">
                                <img className='w-fit' src="http://inspiretemplate.com/opencart/Alvina/image/catalog/Alvina-logo-3.png" alt="" />
                            </div>
                            <div className="pr-16 input hidden md:visible">
                            <SearchInput/>
                            </div>
                            <div className="cart">
                                <div className='button'><FaShoppingCart  /></div>
                                <div>
                                    <p className="m-0">TOTAL</p>
                                    <p className="m-0">$0.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="input mt-5  md:hidden">
                            <SearchInput/>
                        </div>
                    </div>
                </div>
            </div>
            <SubHeader/>
            <Aside/>
        </div>
    )
}

export default index