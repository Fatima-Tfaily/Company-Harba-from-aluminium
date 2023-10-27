import React, { useState, useEffect } from "react";
import "../styles/display.css";
import axios from "axios";
import AddF from "../components/AddF";

const Facades = () => {
  const [data, setData] = useState([]);

  const handleDelete = (facadeId) => {
    axios
      .delete(`http://localhost:8000/facade/delete/${facadeId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Facade deleted successfully!");
          fetchData();
        } else {
          window.alert("Facade couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting facade:", error);
        window.alert("An error occurred while deleting the facade");
      });
  };

  const fetchData = () => {
    const apiUrl = "http://localhost:8000/facade/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("An error occurred while fetching facade data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="display" id="display">
      <h1>Display All Facades</h1>
      <div className="container">
        {data.map((facade) => (
          <div className="card" key={facade._id}>
            <img src={facade.image} alt={facade.image} className="dis_image" />
            <button
              className="delete_button"
              onClick={() => handleDelete(facade._id)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      <AddF />
    </div>
  );
};

export default Facades;
