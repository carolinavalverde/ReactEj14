const APIProductos = import.meta.env.VITE_API_PRODUCTO;
// const APIProductos = process.env.VITE_API_PRODUCTO;
console.log(APIProductos);

//GET
export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIProductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(APIProductos, {
      method: "POST", 
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(productoNuevo)
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT o PATCH
//DELETE
