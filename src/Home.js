import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://bdclgameapi1.herokuapp.com/");

    if (result.data.data) {
      setData(result.data.data);
    }
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default Home;
