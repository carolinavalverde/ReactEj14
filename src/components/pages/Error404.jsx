import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src={error} alt="error 404" />
        <div className='mb-4'>
        <Button variant='success' as={Link} to="/">Volver al inicio</Button>

        </div>
    </section>
    );
};

export default Error404;