import React, { useState, useEffect } from "react";
import "../styles/work.css";
import "../styles/responsive.css";
import axios from "axios";

const Vother = () => {
  const [data, setData] = useState([]);

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
    <div className="work" id="work">
      <h1>Other:</h1>
      <div className="work_container">
        {data.map((other) => (
          <div className="work_card" key={other._id}>
            <img src={other.image} alt={other.image} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vother;
