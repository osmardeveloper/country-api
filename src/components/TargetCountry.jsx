import React from 'react'
  import axios from "axios";
import { useEffect, useState } from "react";

const TargetCountry = () => {

  const [country, setCountry] = useState();

  const [pais, setPais] = useState("colombia")


  const getCountries = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${pais}`)
      // .then((res) => console.log(res.data[0]))
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setPais(e.target.pais.value)
}

  useEffect(() => {
    getCountries();
  }, [pais]);


  
  return (
    <section>
      <form onSubmit={handleSubmit}>
      <div className='header'>
        <input id="pais" type="text" placeholder="wrhite your country"/>
        <button>Search</button> 
      </div>
      
      </form>
     
           <div>
      {country ? (
                    <article className="card">
                      <img src={country.flags.svg} alt="bandera" />
                      <h1> {country.name.common}</h1>
                      <h2> Population: {country.population}</h2>
                      <h2> Capital: {country.capital}</h2>
                      <h2> Region: {country.region}</h2>
                    </article>
                 ) : (
                     <h2>Cargando...</h2>
             )}
           
    </div>
    </section>
   
  )
}


export default TargetCountry