import React from 'react'
import classes from './ArrowControl.css'
import DownIcon from '../../../assets/counters/down.svg'; 
import UpIcon from '../../../assets/counters/up.svg'; 

const arrowControl = (props) => (
    <div>
        <p className={classes.Label}>{props.label}</p>
        <div className={classes.ArrowControl}>
            <div className={classes.ArrowControlContent}>
                <p>{props.value}<span>{props.sup}</span></p>

            </div>
            <div className= {classes.Arrows}>
                <div onClick={() => props.onUpArrowClicked()}> <UpIcon  className= {classes.ArrowUp + " " + (props.upActive ? classes.Active : classes.Inactive)}  /> </div>
                <div onClick={() => props.onUpDownClicked()}> <DownIcon className= {classes.ArrowDown + " " + (props.downActive ? classes.Active : classes.Inactive)} /> </div>
            </div>
        </div>
    </div>
)

export default arrowControl;