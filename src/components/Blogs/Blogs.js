import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = (props) => {
    const { latest } = props;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const latestBlogs = blogs.filter((blog) => blog?.latest);

    return (
        <section className="blogs my-5">
            <Container>
                <Row className='g-4'>
                    <h1 className="fw-bold pt-5">
                        We Share <br /> Our Thoughts On Design
                    </h1>
                    <p className="text-muted mb-5">
                        You don't have to struggle alone, you've got our
                        assistance and help.
                    </p>
                    {latest
                        ? latestBlogs.map((blog) => <Blog key={blog?.id} blog={blog} />)
                        : blogs.map((blog) => (
                              <Blog key={blog?.id} blog={blog} />
                          ))}
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
