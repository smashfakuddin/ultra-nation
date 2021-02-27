import React from 'react';
import './country.css';

const Country = (props) => {
    const {name, population,region,flag} =props.country;
    const handleAddCountry =props.handleAddCountry;
   
    return (
        <div className='country'>
            <h4>This is: {name}</h4>
            <p>It's population: {population}</p>
            <img src={flag} alt="" />
            <p><small>Region:{region}</small></p>       
            <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;