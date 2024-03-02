import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  const { imagen, nombreReceta, descripcion, id } = receta;

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={imagen} alt={nombreReceta} className="card-img-top-nueva" />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">{nombreReceta}</Card.Title>
          <Card.Text>
            Descripción: {descripcion} <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button
            className="btn btn-success me-2"
            as={Link}
            to={`/detallereceta/${id}`}
          >
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;
