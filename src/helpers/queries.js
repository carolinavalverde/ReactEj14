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
    if (respuesta.ok) {
      const datos = await respuesta.json();
      return datos;
    } else {
      throw new Error("Error al obtener la receta");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error de red");
  }
};
