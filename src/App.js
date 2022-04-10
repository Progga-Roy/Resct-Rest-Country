import logo from './logo.svg';
import './App.css'

// import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import './components/Countries/Countries.css'


function App() {
 
  return (
    <div className="App">
    <Country></Country> 
    </div>
  );
}


// function LoadCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data =>setCountries(data))
//   },[])

//   return(
//     <div>
//       <h1>Visiting every country of the world!</h1>
//       <h3>Available countries :{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} ></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//      <h3>Name : {props.name} </h3>
//      <h5>Population : {props.population}</h5>
//     </div>
//   )
// }

export default App;
