import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'

import classes from './Footer.module.css'

const Footer = () => {
    const ctx = useContext(AuthContext);

    return (
        <React.Fragment>
            <AuthContext.Provider>
                <div>{ctx.powerBy}</div>
            </AuthContext.Provider>
        </React.Fragment>
    )
}

export default Footer;