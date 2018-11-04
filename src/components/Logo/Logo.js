import React from 'react';
import classes from './Logo.css'

import TeslaLogo from '../../assets/logo.svg'

const logo = (props) => (
    <div>
        <TeslaLogo className={classes.Logo}/>
    </div>
)

export default logo;