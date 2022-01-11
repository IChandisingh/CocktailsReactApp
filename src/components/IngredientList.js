import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function IngredientPage(props) {

  const one = "Ingredient";
  const all = "Ingredients";
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
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>ABV</th>
              <th>Storage</th>
          </tr>
    {info.map(inf =>(
          <tr>
              <td>{inf.idingredientid}</td>
              <td>{inf.name}</td>
              <td>{inf.type}</td>
              <td>{inf.description}</td>
              <td>{inf.abv}</td>
              <td>{inf.storage}</td>
          </tr>
    ))}
    </table>
    </div>

    </div>
  );
  }
  
  export default IngredientPage;