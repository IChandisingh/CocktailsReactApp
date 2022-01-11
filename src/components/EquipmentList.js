import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function EquipmentPage(props) {

  const one = "Equipment";
  const all = "Equipment";
  const geturl="http://18.222.118.217:8080/cocktails/getAll"+all;


  const[info, setInfo]=useState([])

  useEffect(()=>{
    axios.get(geturl)
    .then(res =>{
      setInfo(res.data)
    })
    .catch(err=>{
      console.log(err);
    });
  },[]);
  return (
      <div>
    <div className="FormDiv">
    <h1>Add {one}</h1>
    <form>
        <label htmlFor="ename">Name:</label><br/>
        <input type="text" id="ename" name="ename"/><br/><br/>
        <label htmlFor="etype">Type:</label><br/>
        <input type="text" id="etype" name="etype"/><br/><br/>
        <input className="submit" type="submit" id="ebtn" name="ebtn"/>
    </form>
    </div>

    <div className="FormDiv">
    <div><h1>{all}</h1>
    <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
          </tr>
    {info.map(inf =>(
          <tr>
              <td>{inf.idequipment}</td>
              <td>{inf.name}</td>
              <td>{inf.type}</td>
          </tr>
    ))}
    </table>
    </div>

    </div>
    </div>
  );
  }
  
  export default EquipmentPage;