import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res=> res.json())
        .then (data=>setCountries(data))
      
    },[]);

    const [mywishList,setMywishList]=useState([]);

    const handelWishList=(country)=>{
        setMywishList([...mywishList,country])
        alert('Wishlist added')
    }
    
    return (
        <div>
            <h1>My Wishlist : </h1>
            {mywishList.map(country=> <li>{country.name.common}</li>)}
               <div className="countriesStyle" > 
          
          {countries.map(country=><Country 
          country={country}
          handelWishList={handelWishList}
          
          >

          </Country>
          )}
 
      
  </div>

        </div>
     
    );
};

export default Countries;