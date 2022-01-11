import React, { useState, useEffect} from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("isomorphic-fetch");


function GarnishPage(props) {
  const[info, setInfo]=useState([]);
  const[newName, setNewName]=useState("");
  const[newType, setNewType]=useState("");
  const[newStorage, setNewStorage]=useState("");
  const[id, setId]=useState("");
  const [addurl, setAddurl]=useState("");
  const [delurl, setDelurl]=useState("");
  const [editurl, setEditurl]=useState("");
  const[editName,setEditName]=useState("");
  const[editType, setEditType]=useState("");
  const[editStorage, setEditStorage]=useState("");
  const[editId, setEditId]=useState("");
  const one = "Garnish";
  const all = "Garnish";
  const geturl="http://18.222.118.217:8080/cocktails/getAll"+all;
  const baseurl="http://18.222.118.217:8080/cocktails"


  useEffect(()=>{
    console.log(newName);
  },[newName]);

  useEffect(()=>{
    console.log(newType);
  },[newType]);

  useEffect(()=>{
    console.log(newStorage);
  },[newStorage]);

  useEffect(()=>{
    console.log(id);
  },[id]);
  useEffect(()=>{
    console.log(editId);
  },[editId]);
  useEffect(()=>{
    console.log(editName);
  },[editName]);
  useEffect(()=>{
    console.log(editStorage);
  },[editStorage]);
  useEffect(()=>{
    console.log(editType);
  },[editType]);


  useEffect(()=>{
    setDelurl(baseurl+"/deleteGarnish?idgarnish="+id);
  },[id]);
  useEffect(()=>{
    setEditurl(baseurl+"/updateGarnish/"+editId+"?name="+editName+"&type="+editType+"&storage="+editStorage);
  },[editId,editStorage,editType,editName]);

  useEffect(()=>{
    setAddurl(baseurl+"/add"+one+"?name="+newName+"&type="+newType+"&storage="+newStorage);
  },[newStorage,newType, newName]);
  
  useEffect(()=>{
    axios.get(geturl)
  .then(res =>{
    setInfo(res.data)
  })
  .catch(err=>{
    console.log(err);
  });
  },[]);

  function handleNameChange(event) {
    setNewName(event.target.value);
  }
  function handleTypeChange(event) {
    setNewType(event.target.value);
  }
  function handleStorageChange(event) {
    setNewStorage(event.target.value);
  }
  function handleIdChange(event) {
    setId(event.target.value);
  }
function handleIdEdit(event) {
  setEditId(event.target.value);
}
function handleNameEdit(event) {
  setEditName(event.target.value);
}
function handleTypeEdit(event) {
  setEditType(event.target.value);
}
function handleStorageEdit(event) {
  setEditStorage(event.target.value);
}



  function handleSubmit(){
    axios.post(addurl);
  }
  function handleDelete(){
    axios.delete(delurl);
  }
  function handleEdit(){
    axios.put(editurl);
  }


      

    return (
        <div>
        <div className="FormDiv">
        <div >
    <h1>Add {one}</h1>
    <form onSubmit={handleSubmit} >
        <input placeholder="Name" type="text" id="gname" name="gname" onChange={handleNameChange}/><br/><br/>
        <input placeholder="Type" type="text" id="gtype" name="gtype" onChange={handleTypeChange}/><br/><br/>
        <input placeholder="Storage" type="type" id="gstorage" name="gstorage" onChange={handleStorageChange}/><br/><br/>
        <button type="submit" className="submit" id="gbtn" >Add</button>
    </form>
    </div>
    <hr></hr> 
    <div>
    <h1>Edit {one}</h1>
    <form  onSubmit={handleEdit}>
        <h3>Entry to change:</h3>
        <input placeholder="ID" type="number" id="gchangeid" onChange={handleIdEdit}/><br/><br/>
        <h3>New Data:</h3>
        <input placeholder="Name" type="text" id="geditname" onChange={handleNameEdit}/><br/><br/>
        <input placeholder="Type" type="text" id="geittype" onChange={handleTypeEdit}/><br/><br/>
        <input placeholder="Storage" type="type" id="geditstorage" name="gstorage" onChange={handleStorageEdit}/><br/><br/>
        <button type="submit" className="submit" id="geditbtn" >Edit</button>
    </form>
    </div>
          <hr></hr>      
    <div >
    <h1>Delete {one}</h1>
    <form onSubmit={handleDelete} >
        <input placeholder="ID" type="number" id="gid" name="gid" onChange={handleIdChange}/><br/><br/>
        <button type="submit" className="submit" id="gdel" name="gdel">Delete</button>
    </form>
    </div>
        </div>
            
    

    <div className="ListDiv">
      <div><h1>{all}</h1>

      <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Storage</th>
            </tr>
      {info.map(inf =>(
            <tr>
                <td>{inf.idgarnish}</td>
                <td>{inf.name}</td>
                <td>{inf.type}</td>
                <td>{inf.storage}</td>
            </tr>
      ))}
      </table>
      <h3></h3>
      </div>

      </div>
        </div>
      
    );
  }
  
  export default GarnishPage;