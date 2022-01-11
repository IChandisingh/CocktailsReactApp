import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function GlassPage(props) {

  const one = "Glass";
  const all = "Glasses";
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
    <div className="FormDiv">
    <div><h1>{all}</h1>
    <table>
          <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Volume</th>
          </tr>
    {info.map(inf =>(
          <tr>
              <td>{inf.idglass}</td>
              <td>{inf.type}</td>
              <td>{inf.volume}</td>
          </tr>
    ))}
    </table>
    </div>

    </div>
  );
  }
  
  export default GlassPage;