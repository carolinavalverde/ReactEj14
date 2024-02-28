import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Recetas = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with bacon, eggs, and cheese.",
      prepTime: "30 minutes",
      image: "spaghetti_carbonara.jpg",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description:
        "Creamy, flavorful Indian chicken dish with spices and tomato sauce.",
      prepTime: "45 minutes",
      image: "chicken_tikka_masala.jpg",
    },
    // Add more recipe objects as needed
  ];

  return (
    <div className="recetas">
      <h1>Recetas</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recetas;
