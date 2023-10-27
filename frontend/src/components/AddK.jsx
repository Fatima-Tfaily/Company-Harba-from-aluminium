import React, { useState } from "react";
import "../styles/add.css";

const AddK = () => {
  const [image, setImage] = useState("");

  const handleAddKitchen = async (e) => {
    e.preventDefault();
    const kitchenBody = { image };
    console.log(kitchenBody);
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("http://localhost:8000/kitchen/add", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.alert("Kitchen added successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error adding kitchen. Please try again later.");
    }
  };

  return (
    <div className="add" id="add">
      <h1>ADD kitchen</h1>
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
        <button className="add-button" onClick={handleAddKitchen}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddK;
