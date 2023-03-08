import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar'
import Home from './Home'
import PlantForm from './PlantForm'
import AllPlants from './AllPlants'
import Trees from './Trees'
import Shrubs from './Shrubs'
import Grasses from './Grasses'
import Forbs from './Forbs'


function App() {

  useEffect(() => {
    fetch('http://localhost:3001/plantList')
    .then(r => r.json())
    .then(list => setAllPlants(list))
  }, [])

  const [allPlants, setAllPlants] = useState([])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/plantform">
          <PlantForm allPlants={allPlants} setAllPlants={setAllPlants}/>
        </Route>
        <Route exact path="/allplants">
          <AllPlants />
        </Route>
        <Route path="/trees">
          <Trees />
        </Route>
        <Route path="/shrubs">
          <Shrubs />
        </Route>
        <Route path="/grasses">
          <Grasses />
        </Route>
        <Route path="/forbs">
          <Forbs />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;


/**
 * App
 *    NavBar
 *      Home
 *      Plant Form
 *      All Plants
 *      Trees
 *      Shrubs
 *      Grasses
 *      Forbs
 *        Plant
 */