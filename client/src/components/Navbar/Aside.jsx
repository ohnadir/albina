import React from 'react'
import "../../StyleSheet/Navbar.scss"
import { MdDashboardCustomize, MdOutlineKeyboardArrowDown } from "react-icons/md"

const Aside = () => {
    return (
        <div className='aside'>
            <div className='max-w-6xl mx-auto px-10 lg:px-0'>
                <div className='menu-card'>
                    <ul >
                        <li>
                            <div className='list-content'>
                                <MdDashboardCustomize/> 
                                <span className='li-text'>Mobile Accessories</span>
                            </div>
                        </li>
                        <li>
                            <div className='list-container'>
                                <div className='list-content'>
                                    <MdDashboardCustomize/> <span className='li-text'>Desktops</span>
                                </div>
                                <MdOutlineKeyboardArrowDown size={18} />
                            </div>
                            {/* <div className='dropdown'>
                                <ul>
                                    <li>SSD</li>
                                    <li>HDD</li>
                                </ul>
                            </div> */}
                        </li>
                        <li>
                            <div className='list-container'>
                                <div className='list-content'>
                                    <MdDashboardCustomize/> <span className='li-text'>Laptops</span>
                                </div>
                                <MdOutlineKeyboardArrowDown size={18} />
                            </div>
                        </li>
                        <li>
                            <div className='list-container'>
                                <div className='list-content'>
                                    <MdDashboardCustomize/> <span className='li-text'>Tablets</span>
                                </div>
                                <MdOutlineKeyboardArrowDown size={18} />
                            </div>
                        </li>
                        <li>
                            <div className='list-container'>
                                <div className='list-content'>
                                    <MdDashboardCustomize/> <span className='li-text'>Software</span>
                                </div>
                                <MdOutlineKeyboardArrowDown size={18} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='hot-deal mt-10'>
                    <div className='hot-deal-card'>
                        <h1>HOT DEAL</h1>
                    </div>
                </div>
                <div className='top-deal mt-10'>
                    <div className="top-deal-card">
                        <h1>TOP DEAL</h1>
                    </div>
                </div>
                <div className='news-letter mt-10'>
                    <div className="news-letter-card">
                        <h1>NEWSLETTER</h1>
                    </div>
                </div>
                <div className='banner mt-10'></div>
            </div>
        </div>
    )
}

export default Aside