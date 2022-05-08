import React from "react";

import './search.styles.css';


export function Search({ placeholder, handleChange }) {
    return (
        <input
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
            className='search' />
    );
};