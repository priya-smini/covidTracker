import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { getCountries } from "./url.js"
import "./App.css";
import axios from "axios";
//we writing jsx which combines react to javascript
function App() {
  const [countries, setCountries] = useState([]); //short term memory for react
  // useffect is a hook which runs a piece of code based on a given condition
  useEffect(() => {
    //async means send a request, wait for the response, do something with the response
    const getCountriesData = async () => {
      // await fetch(getCountries)
      //   .then((response) => {
      //     // console.log(response);
      //     response.json();
      //   })
      //   .then((data) => {
      //     // console.log(data)
      //     const countries = data.map((country) => ({
      //       name: country.country,
      //       value: country.countryInfo.iso2, //UK, USA, FR
      //     }));
      //     setCountries(countries);
      //   });
      axios.get(getCountries).then((response) => {
        console.log(response)
        const countries = response.data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }))
        setCountries(countries)
      })
    }; 
    getCountriesData();
  }, []);
  //the [] means the code inside useeffect will be run once when the component loads and not again
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/** InfoBoxes */}
      {/** InfoBoxes */}
      {/** InfoBoxes */}

      {/** Tables */}
      {/** Graph */}

      {/** Map */}
    </div>
  );
}

export default App;
