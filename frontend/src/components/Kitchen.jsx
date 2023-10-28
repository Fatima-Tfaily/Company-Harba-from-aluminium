import React, { useState, useEffect } from "react";
import "../styles/responsive.css";
import "../styles/display.css";
import axios from "axios";
import AddK from "../components/AddK";

const Kitchen = () => {
  const [data, setData] = useState([]);

  const handleDelete = (kitchenId) => {
    axios
      .delete(`http://localhost:8000/kitchen/delete/${kitchenId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Kitchen deleted successfully!");
          fetchData();
        } else {
          window.alert("Kitchen couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting kitchen:", error);
        window.alert("An error occurred while deleting the kitchen");
      });
  };

  const fetchData = () => {
    const apiUrl = "http://localhost:8000/kitchen/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        const reversedData = [...response.data.data].reverse();
        setData(reversedData); // Access the data property in the response
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("An error occurred while fetching kitchen data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="display" id="display">
      <h1>Display All Kitchen</h1>
      <div className="container">
        {data.map((kitchen) => (
          <div className="card" key={kitchen._id}>
            <img
              src={kitchen.image}
              alt={kitchen.image}
              className="dis_image"
            />
            <button
              className="delete_button"
              onClick={() => handleDelete(kitchen._id)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      <AddK />
    </div>
  );
};

export default Kitchen;
