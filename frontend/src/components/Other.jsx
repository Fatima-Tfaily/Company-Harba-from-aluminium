import React, { useState, useEffect } from "react";
import "../styles/display.css";
import axios from "axios";
import AddO from "../components/AddO";

const Other = () => {
  const [data, setData] = useState([]);

  const handleDelete = (otherId) => {
    axios
      .delete(`https://cack-aluminium.onrender.com/other/delete/${otherId}`)
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
    const apiUrl = "https://cack-aluminium.onrender.com/other/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        const reversedData = [...response.data.data].reverse();
        setData(reversedData);
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
