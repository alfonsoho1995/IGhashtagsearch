import React from "react";

import projectImg from '../../assets/instagramproject.png';
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <img src={projectImg} alt="haotech IG 分析工具"/>
                <h1>歡迎使用 IG 分析工具</h1>
                <p>搜尋最近相關熱門的 hashtags</p>
            </header>
        </React.Fragment>
    )
}

export default MainHeader;