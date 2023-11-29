import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {

  // function renderPlantList() {
    
  // }

  console.log(searchTerm)

  const searchedText = plants.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <ul className="cards">{searchedText.map((plant) => <PlantCard key={plant.name} name={plant.name} image={plant.image} price={plant.price}/>)}</ul>
  );
}

export default PlantList;
