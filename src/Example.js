import React, { useState, useEffect } from "react";
import axios from "axios";
// import data from "./data"; 

const URL_API = "http://strainapi.evanbusse.com/tKEmUfn/strains/search/name/A";

const Example = () => {
  const [weed, setWeed] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL_API);
    setWeed(response.data);
  };

  const renderHeader = () => {
    let headerElement = [
      "id",
      "Nom",
      "Race",
      "Saveur",
      "Effets",
      "Description",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  //ici ou flavors et effects  vide ( methode differente car tableau !!)
  const renderBody = () => {
    return (
      weed &&
      weed.map(({ id, name, race, flavors, effects, desc }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{race}</td>
            <td>{flavors}</td>
            <td>{effects}</td>
            <td>{desc}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <h1 id="title">Liste des graines </h1>
      {/* <div>
        <input type="text" id="search" name="search" placeholder="Recherche " />
      
        <label htmlFor="search-select">Affiner les recherches :</label>
        <select name="select-search" id="select-search" onChange="">
          <option value="">--Selectionner--</option>
          <option value="all">Toutes</option>
          <option value="name">Nom </option>
          <option value="race">Race</option>
          <option value="effect">Effet</option>
          <option value="flavors">Saveur</option>
        </select>
      </div> */}
      <table id="table_weed">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default Example;