import { Button, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import { obtenerRecetaPorId } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    obtenerReceta();
  }, []);

  const obtenerReceta = async () => {
    try {
      const datosReceta = await obtenerRecetaPorId(id);
      setReceta(datosReceta);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Ocurrió un error",
        text: "No se puede obtener la receta, intente esta operación en unos minutos",
        icon: "error",
      });
    }
  };

  if (!receta) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="mainSection">
      <div className="container my-5 col-9">
        <Card >
          <Row>
            <Col md={6}>
              <Card.Img variant="top" className="img-fluid" src={receta.imagen} />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title className="display-6 fw-bold text-center">
                  {receta.nombreReceta}
                </Card.Title>
                <hr />
                <Card.Text>{receta.recetaTexto}</Card.Text>
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
