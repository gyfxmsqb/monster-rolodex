import React from 'react'
import "./search-box.css"


export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className = "search-box"
    type = "search" 
    placeholder = {placeholder} 
    // if you want to log the value on the search bar myou just use the target.value
    onChange = { handleChange}/>
)

