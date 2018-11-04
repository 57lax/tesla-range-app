import React from 'react';
import classes from './Car.css'

import teslaCar from '../../assets/tesla.jpg'
import wheels from '../../assets/wheel-19.png'


const car = (props) => {

    function getSpeedClass(speed){
        if(speed <= 50 ) return classes.SlowSpeed;
        if(speed <= 60 ) return classes.MediumSpeed;
        if(speed <= 70 ) return classes.HighSpeed;
        return classes.MediumSpeed;
    }
    
    let wheelClasses = [classes.Wheel, getSpeedClass(props.speed)]

    return(
        <div className={classes.Container}>
            <img src={teslaCar} className={classes.Car} alt="Car"></img>
            <div className={classes.WheelContainer}>
                <img src={wheels} className={wheelClasses.join(" ") + " " + classes.Left}  alt="LeftWheel"></img>
                <img src={wheels} className={wheelClasses.join(" ") + " " + classes.Right}  alt="RightWheel"></img>
            </div>
        </div>
    )
    
}

export default car;