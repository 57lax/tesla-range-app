import React from 'react'
import classes from './Controls.css'
import ArrowControl from './ArrowControl/ArrowControl'
import TempButton from './TempButton/TempButton'
import SelectControl from './SelectControl/SelectControl'
import constants from '../../constants'

const controls = (props) => (
    <React.Fragment>
        <ul className={classes.List}>
            <li className={classes.Speed}>
                <ArrowControl 
                    label={"Speed"} 
                    value={props.controls.speed} 
                    sup = {"MPH"}
                    onUpArrowClicked = {props.onIncreaseSpeedClick}
                    onUpDownClicked = {props.onDecreaseSpeedClick}
                    upActive = {props.controls.speed < constants.controlsChange.MAX_SPEED}
                    downActive = {props.controls.speed > constants.controlsChange.MIN_SPEED}/>
            </li>
            <li className={classes.Temperature}>
                <ArrowControl 
                    label={"Outside Temperature"} 
                    value={props.controls.temperature} 
                    sup = {'\u00b0'}
                    onUpArrowClicked = {props.onIncreaseTemperatureClick}
                    onUpDownClicked = {props.onDecreaseTemperatureClick}
                    upActive = {props.controls.temperature < constants.controlsChange.MAX_TEMP}
                    downActive = {props.controls.temperature > constants.controlsChange.MIN_TEMP}/>
                <TempButton onTempButtonClick = {props.onTempButtonClick} controls= {props.controls}/>
            </li>
            <li className={classes.Wheels}>
                <SelectControl 
                    label={"Wheels"} 
                    wheels={props.controls.wheels} 
                    onSelectWheelsClick = {props.onSelectWheelsClick}/>
            </li>
        </ul>
    </React.Fragment>
)

export default controls; 