import React from 'react';

import classes from './Ranges.css'
import Range from './Range/Range'

const ranges = (props) => (
    <React.Fragment>
        <ul className={classes.List}>
            {props.teslaModels.map( key=> {
                return  <li 
                            key = {key}  
                            className={classes.ListItem}>
                            <Range 
                                model = {key} 
                                value = {props.state.data[key][props.state.controls.wheels][props.state.controls.ac]["speed"][props.state.controls.speed][props.state.controls.temperature] } />
                        </li>
            })}
        </ul>
    </React.Fragment>
)

export default ranges