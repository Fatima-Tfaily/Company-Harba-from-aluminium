import React, { useState, useEffect } from "react";
import "../styles/display.css";
import axios from "axios";
import AddO from "../components/AddO";

const Other = () => {
  const [data, setData] = useState([]);

  const handleDelete = (otherId) => {
    axios
      .delete(`http://localhost:8000/other/delete/${otherId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Other deleted successfully!");
          fetchData();
        } else {
          window.alert("Other couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting other:", error);
        window.alert("An error occurred while deleting the other");
      });
  };

  const fetchData = () => {
    const apiUrl = "http://localhost:8000/other/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("An error occurred while fetching other data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="display" id="display">
      <h1>Display All Other</h1>
      <div className="container">
        {data.map((other) => (
          <div className="card" key={other._id}>
            <img src={other.image} alt={other.image} className="dis_image" />
            <button
              className="delete_button"
              onClick={() => handleDelete(other._id)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      <AddO />
    </div>
  );
};

export default Other;
