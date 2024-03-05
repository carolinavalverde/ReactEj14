import { Button, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerRecetaPorId } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const cargarReceta = async () => {
      try {
        const response = await obtenerRecetaPorId(id);
        const data = await response.json();
        setReceta(data);
      } catch (error) {
        console.error("Error al cargar la receta:", error);
        Swal.fire({
          title: "La receta no se pudo cargar",
          text: `Intentelo nuevamente más tarde.`,
          icon: "error",
        });
      }
    };

    cargarReceta();
  }, [id]);

  if (!receta) {
    return null;
  }

  const { imagen, nombreReceta, descripcion, ingredientes, recetaTexto } =
    receta;

  return (
    <section className="mainSection">
      <div className="container my-5 col-9">
        <h2 className="text-center display-4 fw-bold mb-5">{nombreReceta}</h2>
        <Card className="p-4 bgCardDetalleProducto border-0 rounded-1">
          <Row>
            <Col md={12} lg={6} className="d-flex justify-content-center">
              <Card.Img variant="top" className="img-fluid" src={imagen} />
            </Col>
            <Col md={12} lg={6}>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Ingredientes
                </Card.Title>
                <ul>
                  {ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                  ))}
                </ul>
                <Card.Title className="text-center mb-4">Receta</Card.Title>
                <p>{recetaTexto}</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <div className=" d-flex justify-content-center">
          <Button variant="success" className="p-3 m-4" as={Link} to="/">
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetalleReceta;
