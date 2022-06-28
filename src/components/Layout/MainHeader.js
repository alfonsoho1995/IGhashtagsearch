import React from "react";

import projectImg from '../../assets/instagramproject.png';
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <img src={projectImg} alt="haotech IG analytics tool"/>
                <h1>Welcome to the IG analytics tool</h1>
                <p>Searching the related and popular hashtags recently</p>
            </header>
        </React.Fragment>
    )
}

export default MainHeader;