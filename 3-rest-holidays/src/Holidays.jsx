import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const fetchData = async (link) => {
  const response = await fetch(
    link
  );
  const jsonData = await response.json();
  return jsonData;
};

export const Holidays = () => {

  const [holidayLists, addHoliday] = useState([])
  const [year, changeYear] = useState(2023)

  let holidayList = "https://date.nager.at/api/v3/PublicHolidays/"
  var name = window.location.href.slice(-2)

  if(!name.includes('/'))
  {
    useEffect(() => {
      holidayList += year + "/" + name + ""
      fetchData(holidayList).then((e) => addHoliday(e));
      holidayList = "https://date.nager.at/api/v3/PublicHolidays/"
    }, [])

    function change(e)
    {
      holidayList += e.target.value + "/" + name + ""
      fetchData(holidayList).then((e) => addHoliday(e));
      holidayList = "https://date.nager.at/api/v3/PublicHolidays/"
      changeYear(e.target.value)
    }
    return (
      <>
      {holidayLists !== undefined ? 
      <>
        <a href="/">Back</a>
        <table>
          <thead>
            <tr>
              <th>Holidays</th>
              <th>
                <input type="number" value={year} onChange={(e) => change(e)}/>
              </th>
            </tr>
          </thead>
          <tbody>
          {holidayLists.map((unnep, i) => (
              <tr key={i}>
                <td>{unnep.date}</td>
                <td>{unnep.localName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </> : <></>}
      </>
    );
        } else {
          return (<></>);
        }
};
