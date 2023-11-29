import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {

  const[name, setName] = useState('')
  const[image, setImage] = useState('')
  const[price, setPrice] = useState(0)

  function handleName(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleImage(e) {
    e.preventDefault()
    setImage(e.target.value)
  }

  function handlePrice(e) {
    e.preventDefault()
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: parseFloat(price)
    }
    fetch ('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPlant),
    })
    .then(res => res.json())
    .then(data => {
      addNewPlant(data)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleName} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImage} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
