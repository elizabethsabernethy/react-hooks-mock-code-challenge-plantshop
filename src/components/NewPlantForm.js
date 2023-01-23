import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const plantData = {
      "name": formData.name,
      "image": formData.image,
      "price": formData.price
    }
    fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantData),
  })
    .then((r) => r.json())
    .then((newPlant) => onAddPlant(newPlant));
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
