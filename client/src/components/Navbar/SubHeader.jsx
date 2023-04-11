import React from 'react'
import "../../StyleSheet/Navbar.scss"
import { TfiMenuAlt } from 'react-icons/tfi'

const SubHeader = () => {
    return (
        <div className='sub-header'>
            <div className='max-w-6xl mx-auto px-10 lg:px-0'>
                <div className="sub-header-container">
                    <div className='categories'>
                        <TfiMenuAlt size={18}/>
                        <p>CATEGORIES</p>
                    </div>
                    <ul>
                        <li>HOME</li>
                        <li>OFFERS</li>
                        <li>CONTACT</li>
                        <li>SITEMAP</li>
                        <li>BRAND</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubHeader