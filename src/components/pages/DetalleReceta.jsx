import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerRecetaPorId } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleReceta = () => {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    obtenerReceta(); // Llamamos a la función para obtener la receta
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

  // Verificamos si la receta está cargada, si no, mostramos un mensaje de carga
  if (!receta) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={receta.imagen} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">
                {receta.nombreReceta}
              </Card.Title>
              <hr />
              <Card.Text>{receta.recetaTexto}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
