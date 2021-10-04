import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = (props) => {

    const {badgeColor, blogImage, blogger, date, title, category} = props.blog;
    return (
        <Col md={4}>
            <Card className='shadow h-100'>
                <Card.Img
                    variant="top"
                    src={blogImage}
                />
                <Card.Body className="text-start">
                    <Badge bg={badgeColor}>{category}</Badge>
                    <Card.Title className="text-start my-4">
                        {title}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <div className="blog-writer d-flex align-items-center">
                            <Image
                                className="p-1 shadow"
                                width="40"
                                src={blogger.image}
                                roundedCircle
                            />
                            <span className="m-0 ms-2 text-muted">{blogger.name}</span>
                        </div>
                        <div className="blog-date text-muted">
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            {date}
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end align-items-center bg-white border-top-0">
                    <div className="course-detail">
                        <Link to='' className="text-dark text-decoration-none btn btn-sm btn-warning">
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
