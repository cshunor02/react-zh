import { useState, useEffect } from "react";
import "./App.css";
import { Holidays } from "./Holidays";

const fetchData = async (link) => {
  const response = await fetch(
    link
  );
  const jsonData = await response.json();
  return jsonData;
};

function App() {

  const [countries, addCountry] = useState([])

  const orszagList = "https://date.nager.at/api/v3/AvailableCountries"
  
  useEffect(() => {
    fetchData(orszagList).then((e) => addCountry(e));
  }, []);


  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((orszag, i) => (
              <tr key={i}>
                <td>
                  <a href={orszag.countryCode}>{orszag.name} ({orszag.countryCode})</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Holidays />
      </div>
    </>
  );
}

export default App;
