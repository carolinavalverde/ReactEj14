import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearReceta } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FormularioReceta = ({ editando, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    if (editando) {
      //solicitar y mostrar el producto en el formullario
      // cargarProductoEnFormulario();
    }
  });

  const cargarRecetaEnFormulario = () => {
    // const respuesta = obtenerReceta()
  };

  const datosValidados = async (receta) => {
    //console.log(receta);
    if (editando) {
      console.log("aqui editando una receta");
    } else {
      //le voy a pedir a la api crear la receta nuevo
      const respuesta = await crearReceta(receta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta: ${recetas.nombreReceta} fue creado correctamente`,
          icon: "success",
        });
        //resetear el form
        reset();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La receta no pude ser creada, intente esta operacion en unos minutos`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ramen"
            {...register("nombreReceta", {
              required: "El nombre de la receta es un dato obligatorio",
              minLength: {
                value: 4,
                message:
                  "El nombre de la receta debe tener como mínimo 4 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre de la receta debe tener como máximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                message:
                  "Debe ingresar una URL válida, con una imagen en formato (jpg | jpeg | gif | png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("receta", {
              required: "La receta es obligatoria",
              minLength: {
                value: 30,
                message: "Debe ingresar como minimo 30 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Debe ingresar como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.receta?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
