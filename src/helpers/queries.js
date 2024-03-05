const APIRecetas = import.meta.env.VITE_API_RECETAS;
// const APIProductos = process.env.VITE_API_RECETAS;
console.log(APIRecetas);

//GET
export const leerReceta = async () => {
  try {
    const respuesta = await fetch(APIRecetas);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearReceta = async (recetaNueva) => {
  try {
    const respuesta = await fetch(APIRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT o PATCH
export const editarReceta = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(APIRecetas + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(APIRecetas + "/" + id, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET de una unica receta
export const obtenerRecetaPorId = async (id) => {
  try {
    const respuesta = await fetch(APIRecetas + "/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
