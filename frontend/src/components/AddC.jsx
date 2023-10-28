import React, { useState } from "react";
import "../styles/add.css";

const AddC = () => {
  const [image, setImage] = useState("");

  const handleAddCabinets = async (e) => {
    e.preventDefault();
    const otherBody = { image };
    console.log(otherBody);
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        "https://cack-aluminium.onrender.com/cabinets/add",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.alert("Cabinet added successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error adding cabinet. Please try again later.");
    }
  };

  return (
    <div className="add" id="add">
      <h1>ADD Cabinet</h1>
      <div className="addd">
        <div>Image:</div>
        <div>
          <input
            type="file"
            className="form"
            onChange={(e) => setImage(e.target.files[0])} // Use e.target.files to get the selected file
          />
        </div>
      </div>
      <div>
        <button className="add-button" onClick={handleAddCabinets}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddC;
