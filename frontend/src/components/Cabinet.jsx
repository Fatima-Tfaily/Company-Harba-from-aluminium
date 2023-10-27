import React, { useState, useEffect } from "react";
import "../styles/display.css";
import axios from "axios";
import AddC from "../components/AddC";

const Cabinet = () => {
  const [data, setData] = useState([]);

  const handleDelete = (cabinetId) => {
    axios
      .delete(`http://localhost:8000/cabinets/delete/${cabinetId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Cabinet deleted successfully!");
          fetchData();
        } else {
          window.alert("Cabinet couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting cabinet:", error);
        window.alert("An error occurred while deleting the cabinet");
      });
  };

  const fetchData = () => {
    const apiUrl = "http://localhost:8000/cabinets/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("An error occurred while fetching cabinet data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="display" id="display">
      <h1>Display All Cabinets and Bakadosh</h1>
      <div className="container">
        {data.map((cabinet) => (
          <div className="card" key={cabinet._id}>
            <img
              src={cabinet.image}
              alt={cabinet.image}
              className="dis_image"
            />
            <button
              className="delete_button"
              onClick={() => handleDelete(cabinet._id)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      <AddC />
    </div>
  );
};

export default Cabinet;
