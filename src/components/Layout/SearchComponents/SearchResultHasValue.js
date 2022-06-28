import React, { useEffect } from "react";
import c3 from "c3";

import classes from "./SearchResultHasValue.module.css";

const SearchResultHasValue = (props) => {

    useEffect(() => {
        var compare = props.value;
        var hashtagList = [];
        var countList = ["Count"];
        function sortData() {
            
            compare.sort((a, b) => {
                return a.count - b.count;
            });
            compare.reverse();
            compare.forEach(element => {
                var intProcess = parseInt(element.count);
                hashtagList.push(element.hashtag);
                countList.push(intProcess);
            });
            
            render(hashtagList, countList);
        }

        sortData();

        function render (hashtagList, countList) {
            c3.generate({
                bindto: "#chart",
                transition: {
                    duration: 500
                },
                data: {
                    columns: [
                        countList
                    ],
                    type: "bar",
                    colors: {
                        "Count": "#26453D"
                    },
                    labels: true,
                    onmouseover: function (d) { 
                        
                    }
                },
                axis:{
                    rotated: true,
                    x: {
                        show: true,
                        type: "category",
                        categories: hashtagList,
                        tick: {
                            multiline: false
                        },
                    },
                    y: {
                        show: true,
                        max: 35
                    },
                },
                bar: {
                    width: {
                      ratio: 0.5
                    }
                }
            });
        }
        
    }, [props])

    return (
        <React.Fragment>
            <div id="chart" className={classes.chart}/>
        </React.Fragment>
    )
}

export default SearchResultHasValue;