import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function CocktailPage(props) {

  const one = "Cocktail";
  const all = "Cocktails";
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
        <label htmlFor="cname">Name:</label><br/>
        <input type="text" id="cname" name="cname"/><br/><br/>
        <label htmlFor="cvol">Volume:</label><br/>
        <input type="number" id="cvol" name="cvol"/><br/><br/>
        <label htmlFor="cabv">ABV:</label><br/>
        <input type="number" id="cabv" name="cabv"/><br/><br/>
        <label htmlFor="cprice">Price:</label><br/>
        <input type="number" id="cprice" name="cprice"/><br/><br/>
        <input className="submit" type="submit" id="cbtn" name="cbtn"/>
    </form>
    </div>

    <div className="FormDiv">
    <div><h1>{all}</h1>
    <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Volume</th>
              <th>ABV</th>
              <th>Price</th>
          </tr>
    {info.map(inf =>(
          <tr>
              <td>{inf.idcocktail}</td>
              <td>{inf.name}</td>
              <td>{inf.volume}</td>
              <td>{inf.abv}</td>
              <td>{inf.price}</td>
          </tr>
    ))}
    </table>
    </div>

    </div>
    </div>

  );
  }
  
  export default CocktailPage;