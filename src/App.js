import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import './App.css';
import Cart from './components/cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
  }, []);

  const handleAddCountry = (country) => { 
    const newCart =[...cart, country];
    setCart(newCart);
   }

  return (
    <div className="App">
      <h1>country loaded:{countries.length}</h1>
      <h4>country added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha2Code} ></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
