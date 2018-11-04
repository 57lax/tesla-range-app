import React from 'react'
import classes from './SelectControl.css'
import Wheel19 from '../../../assets/wheels/19.svg'; 
import Wheel21 from '../../../assets/wheels/21.svg'; 

const selectControl = (props) => (
    <div>
        <p className={classes.Label}>{props.label}</p>
        <div className={classes.SelectOptionsContainer}>
            <div 
            onClick ={() => props.onSelectWheelsClick("19")} 
            className={classes.SelectOption + " "+ (props.wheels === "19" ? classes.OptionActive : "")}>
                <div>
                <Wheel19 className={classes.Wheel}/>
                </div>
                <p>19"</p>
            </div>
            <div 
                onClick ={() => props.onSelectWheelsClick("21")} 
                className={classes.SelectOption + " "+ (props.wheels === "21" ? classes.OptionActive : "")}>
                <div>
                <Wheel21 className={classes.Wheel}/>
                </div>
                <p>21"</p>
            </div>
        </div>
    </div>
)

export default selectControl;