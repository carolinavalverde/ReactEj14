import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearReceta,
  obtenerRecetaPorId,
  editarReceta,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FormularioReceta = ({ editando, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editando) {
      cargarRecetaEnFormulario();
    }
  }, []);

  const cargarRecetaEnFormulario = async () => {
    const respuesta = await obtenerRecetaPorId(id);
    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();

      setValue("nombreReceta", recetaBuscada.nombreReceta);
      setValue("imagen", recetaBuscada.imagen);
      setValue("descripcion", recetaBuscada.descripcion);
      setValue("receta", recetaBuscada.recetaTexto);
    }
  };

  const datosValidados = async (receta) => {
    if (editando) {
      const respuesta = await editarReceta(receta, id);

      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta editada",
          text: `La receta de ${receta.nombreReceta} fue editada correctamente`,
          icon: "success",
        });

        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "La receta no se pudo editar",
          text: `La receta de ${receta.nombreReceta} no se pudo editar, intentelo nuevamente`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearReceta(receta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta de ${receta.nombreReceta} fue creada correctamente`,
          icon: "success",
        });

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
    <section className="mainSection">
      <div className="container col-8">
        <h1 className="display-4 mt-5 text-center">{titulo}</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Nombre Receta:</Form.Label>
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
            <Form.Label>Imagen URL:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg"
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
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Sopa japonesa con fideos y caldo aromático."
              as="textarea"
              {...register("descripcion", {
                required: "La descripcion es obligatoria",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Debe ingresar como maximo 30 caracteres",
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
              placeholder="Ej: El ramen es un plato japonés reconfortante que consiste en fideos servidos en un caldo sabroso, generalmente a base de huesos de cerdo o pollo, con diversos acompañamientos como huevo marinado, carne de cerdo, cebolla verde y algas nori."
              as="textarea"
              {...register("receta", {
                required: "La receta es obligatoria",
                minLength: {
                  value: 30,
                  message: "Debe ingresar como minimo 30 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "Debe ingresar como maximo 200 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.receta?.message}
            </Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" variant="success" className="p-3">
              Guardar
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default FormularioReceta;
