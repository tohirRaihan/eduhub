import {
    faArrowRight,
    faBook,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = () => {
    return (
        <Col md={4}>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/870/356/212?blur"
                />
                <Card.Body>
                    <div className="course-info d-flex justify-content-between">
                        <div className="course-lession text-muted">
                            <FontAwesomeIcon icon={faBook} className='me-2' />
                            43 Lession
                        </div>
                        <div className="course-rating text-muted">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="text-warning me-2"
                            />
                            4.5 (47)
                        </div>
                    </div>
                    <Card.Title className='text-start my-4'>
                        Become a product Manager learn the skills & job.
                    </Card.Title>
                    <Card.Text className="d-flex align-items-center my-3">
                        <Image
                            className="p-1 shadow"
                            width="40"
                            src="https://randomuser.me/api/portraits/thumb/men/62.jpg"
                            roundedCircle
                        />
                        <p className="m-0 ms-2 text-muted">Jim Séchen</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div className="course-price">
                        <span className='text-success fw-bold h3'>$32</span>
                    </div>
                    <div className="course-detail">
                        <Link className="text-dark text-decoration-none">
                            Know Detail
                        </Link>{' '}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;
