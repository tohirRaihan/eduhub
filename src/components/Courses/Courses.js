import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    return (
        <section className="courses my-5">
            <Container>
                <Row>
                    <h1 className='fw-bold'>Find The Right <br /> Online Course For You</h1>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                </Row>
            </Container>
        </section>
    );
};

export default Courses;
