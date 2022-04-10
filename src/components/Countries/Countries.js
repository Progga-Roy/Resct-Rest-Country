import React from 'react';
import './Countries.css'
const Countries = (props) => {
    const {name,population,area,region,flags}= props.country
    console.log(props.country)
    return (
        <div className='countries' >
            <h2>Country name : {name.common}</h2>
            <h4>Population : {population}</h4>
            <img src={flags.png} alt="" />
            <h5>Area : {area}</h5>
            <h6>region : {region}</h6>
        </div>
    );
};

export default Countries;