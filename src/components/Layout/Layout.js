import React from 'react';

import classes from './Layout.css';
import Logo from '../Logo/Logo';

const layout = (props) => (
    <React.Fragment>
        <div className={classes.Header}><Logo/></div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;