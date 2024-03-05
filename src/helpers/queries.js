const APIRecetas = import.meta.env.VITE_API_RECETAS;

export const leerReceta = async () => {
  try {
    const respuesta = await fetch(APIRecetas);
    return respuesta;
  } catch (error) {
  }
};

export const crearReceta = async (recetaNueva) => {
  try {
    const respuesta = await fetch(APIRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
  }
};

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
  }
};

export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(APIRecetas + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
  }
};

export const obtenerRecetaPorId = async (id) => {
  try {
    const respuesta = await fetch(APIRecetas + "/" + id);
    return respuesta;
  } catch (error) {
  }
};
