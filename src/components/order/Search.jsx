import React from 'react'
import './search.css'
import {FaSearch} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {mm} from './Menu'
const Search = ({active,setActive}) => {
    return (
        <div className="search">
                <HiMenu onClick={()=>{setActive(true)}} className={!active?'show':'hide'}/>
                <input placeholder="search" type="text" name="search" id="search"/>
                <button><FaSearch/></button>
            
        </div>
    )
}

export default Search
