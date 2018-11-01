import React from 'react';

import classes from './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <header className={classes.Header}>Tesla logo</header>
        <main>
            {props.children}
        </main>
        <footer>
                Some text
        </footer>
    </React.Fragment>
);

export default layout;