import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import "./App.css";
import axios from "axios";
import CharacterGrid from "./components/char/CharacterGrid";
const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    let fetchItems = async () => {
      let url = `http://hp-api.herokuapp.com/api/characters?name`;
      let result = await axios(url);
      // console.log(result.data);
      setItems(result.data);
      setisloading(false);
    };
    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header />
      <CharacterGrid isloading={isloading} items={items} />
    </div>
  );
};

export default App;
