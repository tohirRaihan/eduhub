import {
    faArrowRight,
    faBook,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const {
        courseImage,
        instructor,
        lession,
        title,
        rating,
        price,
        priceColor
    } = props?.course;

    return (
        <Col md={4}>
            <Card className="h-100">
                <Card.Img variant="top" src={courseImage} />
                <Card.Body>
                    <div className="course-info d-flex justify-content-between">
                        <div className="course-lession text-muted">
                            <FontAwesomeIcon icon={faBook} className="me-2" />
                            {lession} Lession
                        </div>
                        <div className="course-rating text-muted">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="text-warning me-2"
                            />
                            {rating.rate} ({rating.count})
                        </div>
                    </div>
                    <Card.Title className="text-start my-4">{title}</Card.Title>
                    <Card.Text className="d-flex align-items-center my-3">
                        <Image
                            className="p-1 shadow"
                            width="40"
                            src={instructor.image}
                            roundedCircle
                        />
                        <span className={`m-0 ms-2 text-muted`}>
                            {instructor.name}
                        </span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="course-price">
                        <span className={`text-${priceColor} fw-bold h3`}>
                            ${price}
                        </span>
                    </div>
                    <div className="course-detail">
                        <Link to="" className="text-dark text-decoration-none">
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
