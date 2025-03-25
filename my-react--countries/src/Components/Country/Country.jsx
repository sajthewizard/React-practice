import { useState } from 'react';
import './Country.css'
const Country = ({country,handelWishList}) => {


   const [visited,setVisited]=useState(false);
   const handeVisited=()=>{
    setVisited(!visited);
    console.log(visited)

   }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <div className='first'>
            <h5 >Name: {country.name.common}</h5>
            <img className='pic'  src={country?.coatOfArms?.png} alt="" />

            </div>
            <p > People: {country.population}</p>
            <button onClick={handeVisited} style={{background:'black',color:'white',borderRadius:'10px',margin:'3px'}}> Visited</button>
          
            <button onClick={()=>{handelWishList(country)}} style={{background:'black',color:'white',borderRadius:'10px',margin:'3px'}} > Will visit Soon</button>
            <div>
            </div>  
        </div>
    );
};

export default Country;