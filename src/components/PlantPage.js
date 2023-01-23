import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState('')

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then((resp)=> resp.json())
    .then((plants)=> setPlants(plants))
  },[])
  
  function filterPlants(input){
    setFilteredPlants(input)
  }
  
  const plantsToShow = plants.filter((plant)=>{
    return ((plant.name).toLowerCase()).match(filteredPlants.toLowerCase());
  })

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search filterPlants={filterPlants}/>
      <PlantList plants={plantsToShow}/>
    </main>
  );
}

export default PlantPage;
