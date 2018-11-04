import React from 'react'
import classes from './TempButton.css'
import ACIcon from '../../../assets/climate/ac-on.svg'; 
import HeatIcon from '../../../assets/climate/heat-on.svg'; 
import constants from '../../../constants'

const tempButton = (props) => {
    let buttonClasses = [classes.TempButton];
    let title = [];
    let icon;

    if(props.controls.temperature <= constants.controlsChange.HEAT_ON_TEMP) {
        title.push("heat")
        if(props.controls.ac === "on") buttonClasses.push(classes.Heat)
        icon = <HeatIcon className={classes.Icon}/>
    } else {
        title.push("ac")
        if(props.controls.ac === "on") buttonClasses.push(classes.AC)
        icon = <ACIcon className={classes.Icon}/>
    }

    if(props.controls.ac === "on") {
        title.push("on")
        buttonClasses.push(classes.On)
    } else {
        title.push("off")
        buttonClasses.push(classes.Off)
    }

    return (
    <div className={classes.Container}>
        <div onClick = {() => props.onTempButtonClick()} className={ buttonClasses.join(" ")}> 
         <p>{ title.join(" ")}</p>
         {icon}
        </div>
    </div>
    )
}

export default tempButton;