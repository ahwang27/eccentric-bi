import React, { Component } from 'react';
import {connect} from 'react-redux'

const WeatherWidget = props =>
    <div className="card small-widget">
        <h3>Weather</h3>
        <img src="https://image.flaticon.com/icons/svg/146/146204.svg" alt="sunny" className="img-responsive col-sm-6"/>
        <h3>{props.temperature} F</h3>
        <h3>Pressure: {props.pressure}</h3>
    </div>

const mapStateToProps = state => ({
    temperature: state.widgetContainer.weather.temperature,
    pressure: state.widgetContainer.weather.pressure
})

export default connect(mapStateToProps)(WeatherWidget) 