import { Image } from 'react-bootstrap';
import ErrorImage from '../../images/error.png';
import './Error.css';

const Error = () => {
    return (
        <section className="error-404">
            <Image src={ErrorImage} />
        </section>
    );
};
