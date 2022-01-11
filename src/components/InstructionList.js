import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function InstructionPage(props) {

  const one = "Instruction";
  const all = "Instructions";
  const geturl="http://18.222.118.217:8080/cocktails/getAll"+all;
/*
  const [formData, setFormData] = useState({
    description:" "
  });
  const[postUrl, setPostUrl]=useState({})
  
  */


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
    <div className="ListDiv">
    <div><h1>{all}</h1>
    <table>
          <tr>
              <th>Id</th>
              <th>Description</th>

          </tr>
    {info.map(inf =>(
          <tr>
              <td>{inf.idinstruction}</td>
              <td>{inf.description}</td>
          </tr>
    ))}
    </table>
    </div>

    </div>
  );
  }
  
  export default InstructionPage;