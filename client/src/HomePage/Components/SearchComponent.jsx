import React from 'react';
import './SearchComponent.css';
import {func} from "prop-types";

const SearchComponent = ({ setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <input className="search-component" type="text" placeholder='Search...' onChange={(e) => handleSearch(e)}></input>
        </>
    )
}

SearchComponent.propTypes = {
    setSearch: func,
}

export default SearchComponent;