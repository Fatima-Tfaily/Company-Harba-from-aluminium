import React, { useState, useEffect } from "react";
import axios from "axios";
const Vcabinet = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "https://cack-aluminium.onrender.com/cabinets/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        const reversedData = [...response.data.data].reverse();
        setData(reversedData);
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
    <div className="Work" id="Work">
      <h1>Cabinets and Bakadosh:</h1>
      <div className="work_container">
        {data.map((cabinet) => (
          <div className="work_card" key={cabinet._id}>
            <img src={cabinet.image} alt={cabinet.image} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vcabinet;
