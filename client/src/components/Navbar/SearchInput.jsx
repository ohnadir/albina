import React from 'react'
import { BiSearch } from 'react-icons/bi';
const SearchInput = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Search" />
            <button><BiSearch/></button>
        </div>
    )
}

export default SearchInput