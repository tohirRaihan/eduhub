import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <Container>
                <Row>
                    <h1 className="fw-bold py-5">
                        We Share <br /> Our Thoughts On Design
                    </h1>
                    <Blog></Blog>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
