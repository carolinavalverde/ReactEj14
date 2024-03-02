import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Recetas = () => {
  const recetas = [
    
  ];

  return (
    <div className="recetas">
      <h1>Recetas</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recetas;
