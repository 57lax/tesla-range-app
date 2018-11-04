import React, {Component} from 'react';
import classes from './TeslaRange.css'
import Car from '../../components/Car/Car'
import Ranges from '../../components/Ranges/Ranges'
import Controls from '../../components/Controls/Controls';
import teslaData from '../../teslaData';
import constants from '../../constants'

class TeslaRange extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: teslaData.data,
            teslaModels: constants.teslaModels,
            controls: {
                speed: constants.controlsInitials.SPEED,
                temperature: constants.controlsInitials.TEMP,
                ac: constants.controlsInitials.AC,
                heat: null,
                wheels: constants.controlsInitials.WHEELS
            }
        }

        this.handleSelectWheelsChange = this.handleSelectWheelsChange.bind(this);
        this.handleDecreaseSpeedChange = this.handleDecreaseSpeedChange.bind(this);
        this.handleIncreaseSpeedChange = this.handleIncreaseSpeedChange.bind(this);
        this.handleDecreaseTemperatureChange = this.handleDecreaseTemperatureChange.bind(this);
        this.handleIncreaseTemperatureChange = this.handleIncreaseTemperatureChange.bind(this);
        this.handleTempButtonClick = this.handleTempButtonClick.bind(this);
        
    }

    handleSelectWheelsChange(value){
        this.setState({
            ...this.state,
            controls: {
                ...this.state.controls,
                wheels: value
            }
        })
    }

    handleTempButtonClick(){
        let newValue = (this.state.controls.ac === "on" ? "off" : "on");
        this.setState({
            ...this.state,
            controls: {
                ...this.state.controls,
                ac: newValue
            }
        })
    }

    handleIncreaseSpeedChange(){
        let newSpeed = this.state.controls.speed + constants.controlsChange.SPEED_INCREMENT;
        if(newSpeed <= constants.controlsChange.MAX_SPEED) {
            this.setState({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    speed: newSpeed
                }
            })
        }
    }

    handleDecreaseSpeedChange(){
        let newSpeed = this.state.controls.speed - constants.controlsChange.SPEED_DECREMENT;
        if(newSpeed >= constants.controlsChange.MIN_SPEED) {
            this.setState({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    speed: newSpeed
                }
            })
        }
    }

    handleIncreaseTemperatureChange(){
        let newTemperature = this.state.controls.temperature + constants.controlsChange.TEMP_INCREMENT;
        if(newTemperature <= constants.controlsChange.MAX_TEMP) {
            this.setState({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    temperature: newTemperature
                }
            })
        }
    }

    handleDecreaseTemperatureChange(){
        let newTemperature = this.state.controls.temperature - constants.controlsChange.TEMP_DECREMENT;
        if(newTemperature >= constants.controlsChange.MIN_TEMP) {
            this.setState({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    temperature: newTemperature
                }
            })
        }
    }

    render () {
        return (
            this.state.data === null ? "Loading..." :
            <div className={classes.Wrapper}>
                <h1 className={classes.Title}>Range Per Charge</h1>
                <Car 
                    speed={this.state.controls.speed}/>
                <Ranges 
                    teslaModels = { this.state.teslaModels} 
                    state = {this.state} ></Ranges>
                <Controls 
                    controls = {this.state.controls}
                    onSelectWheelsClick = {this.handleSelectWheelsChange}
                    onIncreaseSpeedClick = {this.handleIncreaseSpeedChange}
                    onDecreaseSpeedClick = {this.handleDecreaseSpeedChange}
                    onIncreaseTemperatureClick = {this.handleIncreaseTemperatureChange}
                    onDecreaseTemperatureClick = {this.handleDecreaseTemperatureChange}
                    onTempButtonClick = {this.handleTempButtonClick}></Controls>
                <div className={classes.BottomNotice}>
                    <p>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model. </p>
                    <p>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</p>
                </div>
            </div>
        )
    }
}

export default TeslaRange;