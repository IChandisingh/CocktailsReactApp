import React from "react";
import Nav from "./Nav";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import CocktailPage from "./CocktailList";
import GarnishPage from "./GarnishList";
import IngredientPage from "./IngredientList";
import InstructionPage from "./InstructionList";
import GlassPage from "./GlassList";
import EquipmentPage from "./EquipmentList";

function App() {


  return (
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<div><h1>TEST</h1></div>}/>
        <Route path="/Cocktails" element={
          <div><CocktailPage/></div>
        }/>
        <Route path="/Ingredients" element={
          <div><IngredientPage/></div>
        }/>
        <Route path="/Instructions" element={
          <div><InstructionPage/></div>        
        }/>
        <Route path="/Garnish" element={
          <div><GarnishPage/></div>
        }/>
        <Route path="/Glass" element={
          <div><GlassPage/></div>
        }/>
        <Route path="/Equipment" element={
          <div><EquipmentPage/></div> 
        }/>
      </Routes>


    </Router>
  );
}

export default App;
