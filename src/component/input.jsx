import React from 'react';
import {useWeather} from '../context/weather'

const Input = (props) => {
    const weather = useWeather();
    return (
        <input
            className='input-field'
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

export default Input;