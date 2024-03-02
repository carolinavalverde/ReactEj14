import { Button } from "react-bootstrap";
import error from "../../assets/error404.jpg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" />
      <div className="my-4">
        <span className="display-6 m-4">Parece que ésta vez no podrá ser</span>
        <br />
        <span className="display-6 m-4">
          Intentá en otro momento o volvé al inicio
        </span>
        <div className=" d-flex justify-content-center">
          <Button variant="success" className="p-3 m-4" as={Link} to="/">
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
