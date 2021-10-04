import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <Container>
                <Row>
                    <h1 className="fw-bold pt-5">
                        We Share <br /> Our Thoughts On Design
                    </h1>
                    <p className='text-muted mb-5'>
                        You don't have to struggle alone, you've got our
                        assistance and help.
                    </p>
                    <Blog></Blog>
                    <Blog></Blog>
                    <Blog></Blog>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
