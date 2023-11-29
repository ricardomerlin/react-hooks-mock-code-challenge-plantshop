import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

const[searchTerm, setSearchTerm]=useState('')

  function addNewPlant(data) {
    setPlants([...plants, data])
}

  function bringSearchUp(search) {
    setSearchTerm(search)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search bringSearchUp={bringSearchUp}/>
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
