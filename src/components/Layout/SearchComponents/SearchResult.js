import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import SearchResultHasValue from "./SearchResultHasValue";
import SearchResultEmpty from "./SearchResultEmpty";

const SearchResult = (props) => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [called, setCalled] = useState(false);

    useEffect(() => {
        // console.log("search change !!!");
        
        setInput(props.inputValue);
        
        var url = `https://asia-east1-ighashtag-project-01.cloudfunctions.net/fbDeveloperTest?search=${props.inputValue}`;
        
        
        // var url = `/api/hashtags/${props.inputValue}`;
        // var url = `/api/hashtags`;
        // var url = `/api/hashtags/sqltest`;
        // var url = `/sqltest`;


        // console.log(url);
        axios.get(url)
            .then(res => {
                // console.log(res);
                if (res.length !== 0) {
                    var resultObj = JSON.parse(res.data.split('result:')[1]);
                    // console.log(typeof(resultObj));
                    // console.log(resultObj);
                    setResult(resultObj);
                    setCalled(true);
                }
            })
            .catch(e => {
                console.log(e);
            })
        
    }, [props]);

    var resultShow;

    if (called === true) {
        resultShow = <SearchResultHasValue value={result}/>
    } else {
        resultShow = <SearchResultEmpty />
    }

    // console.log(input);

    return (
            <React.Fragment>
                {resultShow}
            </React.Fragment>
    )
}

export default SearchResult;