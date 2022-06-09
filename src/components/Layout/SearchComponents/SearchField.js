import React from "react";
import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchFiled = () => {
    const [inputValueToResult, setInputValueToResult] = useState('');

    const inputHandler = (value) => {
        setInputValueToResult(value);
    }

    return (
        <React.Fragment>
            <SearchBar onInput={inputHandler}/>
            <SearchResult inputValue={inputValueToResult} />
        </React.Fragment>
    )
};

export default SearchFiled;