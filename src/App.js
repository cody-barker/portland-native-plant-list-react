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
import Herbs from './Herbs'

function App() {

  const [allPlants, setAllPlants] = useState([])
  const [biSearch, setBiSearch] = useState("")
  const [comSearch, setComSearch] = useState("")

  function handleBiNameSearchState(e) {
    setBiSearch(e.target.value)
  }

  function handleComNameSearchState(e) {
    setComSearch(e.target.value)
  }

  useEffect(() => {
    fetch('https://plantlist-database.onrender.com/plants')
    .then(r => r.json())
    .then(list => setAllPlants(list))
  }, [])

  function compare(a, b) {
    if (a.binomialName.toLowerCase() < b.binomialName.toLowerCase()) {
        return -1
    }
    if (a.binomialName.toLowerCase() > b.binomialName.toLowerCase()) {
        return 1
    }
    return 0
}

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/plantform">
          <PlantForm allPlants={allPlants} setAllPlants={setAllPlants}/>
        </Route>
        <Route path="/allplants">
          <AllPlants allPlants={allPlants} compare={compare} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
        </Route>
        <Route path="/trees">
          <Trees allPlants={allPlants} compare={compare} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
        </Route>
        <Route path="/shrubs">
          <Shrubs allPlants={allPlants} compare={compare} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
        </Route>
        <Route path="/grasses">
          <Grasses allPlants={allPlants} compare={compare} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
        </Route>
        <Route path="/herbs">
          <Herbs allPlants={allPlants} compare={compare} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;