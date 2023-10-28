import React, { useState, useEffect } from "react";
import "../styles/responsive.css";
import "../styles/work.css";
import axios from "axios";

const Vfacade = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "https://cack-aluminium.onrender.com/facade/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        const reversedData = [...response.data.data].reverse();
        setData(reversedData);
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
    <div className="work" id="work">
      <h1>Facades:</h1>
      <div className="work_container">
        {data.map((facade) => (
          <div className="work_card" key={facade._id}>
            <img src={facade.image} alt={facade.image} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vfacade;
