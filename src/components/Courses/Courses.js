import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = (props) => {
    const { latest } = props;
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const latestCourses = courses.filter((course) => course?.latest);

    return (
        <section className="courses my-5">
            <Container>
                <Row className="g-4">
                    <h1 className="fw-bold pt-5">
                        Find The Right <br /> Online Course For You
                    </h1>
                    {latest
                        ? latestCourses.map((course) => <Course key={course?.id} course={course} />)
                        : courses.map((course) => (
                              <Course key={course?.id} course={course} />
                          ))}
                </Row>
            </Container>
        </section>
    );
};

export default Courses;
