import { useState } from "react";
import React from "react";
import AnimalShow from "./AnimalShow";
import '../components/Button.css'

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
};


const Button = () => {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal([])])
    }
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
     })
  return (
    <div className="add-animal">
        <button className="add-button" onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>

    </div>);
};

export default Button



