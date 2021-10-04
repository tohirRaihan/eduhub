import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <Col md={4}>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/870/356/212?blur"
                />
                <Card.Body className="text-start">
                    <Badge bg="primary">Primary</Badge>
                    <Card.Title className="text-start my-4">
                        Become a product Manager learn the skills & job.
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-center my-3">
                        <div className="blog-writer d-flex align-items-center">
                            <Image
                                className="p-1 shadow"
                                width="40"
                                src="https://randomuser.me/api/portraits/thumb/men/62.jpg"
                                roundedCircle
                            />
                            <p className="m-0 ms-2 text-muted">Jim Séchen</p>
                        </div>
                        <div className="blog-date text-muted">
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            July 02, 2022
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center bg-white border-top-0">
                    <div className="course-price">
                        {/* <span className="text-success fw-bold h3">$32</span> */}
                    </div>
                    <div className="course-detail">
                        <Link className="text-dark text-decoration-none btn btn-sm btn-warning">
                            Read More{' '}
                        <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Blog;
