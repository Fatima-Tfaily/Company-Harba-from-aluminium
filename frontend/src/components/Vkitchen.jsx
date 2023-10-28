import React, { useState, useEffect } from "react";
import "../styles/responsive.css";
import "../styles/work.css";
import axios from "axios";

const Vkitchen = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "https://cack-aluminium.onrender.com/kitchen/getAll";
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
    <div className="work" id="work">
      <h1>Kitchen:</h1>
      <div className="work_container">
        {data.map((kitchen) => (
          <div className="work_card" key={kitchen._id}>
            <img src={kitchen.image} alt={kitchen.image} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vkitchen;
