import React, { useState, useEffect} from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./App.css";

function App() {

   const [countries, setCountries] = useState([])

  useEffect(() => {
    
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2 //UK, USA, FR
          }
        ))
        setCountries(countries)
      })
    }
    getCountriesData();
  }, [])
  return (
    <div className="app">
      {/** Header */}
      {/** Title + Select input dropdown field */}
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
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
