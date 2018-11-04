import React from 'react';

import classes from './Range.css'
import Model75 from '../../../assets/models/75.svg'; 
import Model75d from '../../../assets/models/75d.svg'; 
import Model60 from '../../../assets/models/60.svg'; 
import Model60d from '../../../assets/models/60d.svg'; 
import Model90d from '../../../assets/models/90d.svg'; 
import ModelP100d from '../../../assets/models/p100d.svg'; 

const modelIcons = {
    "60" : <Model60 className={classes.Model}/>,
    "60D" : <Model60d className={classes.Model}/>,
    "75" : <Model75 className={classes.Model}/>,
    "75D" : <Model75d className={classes.Model}/>,
    "90D" : <Model90d className={classes.Model}/>,
    "P100D" : <ModelP100d className={classes.Model}/>,
}

const range = (props) => (
        <React.Fragment>
            <div className={classes.ModelContainer}>{modelIcons[props.model]}</div>
            <div className={classes.Range}>{props.value}</div>
        </React.Fragment>
)

export default range