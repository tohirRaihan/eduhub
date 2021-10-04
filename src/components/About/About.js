import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import AboutImage from '../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page pt-5 mt-5">
            <section className="text-start">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xs={12} md={6} lg={5}>
                            <Image src={AboutImage} fluid />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <h1 className="fw-bold">
                                Achieve Your
                                <br />
                                Goals With EduHub
                            </h1>
                            <p className="text-muted">
                                Lost the plot bobby such a fibber bleeding bits
                                and bobs don't get shirty with me bugger all
                                mate chinwag super pukka william barney, horse
                                play buggered.
                            </p>
                            <ul className="list-unstyled lead my-5">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className="text-danger me-2"
                                    />
                                    Upskill your organization
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className="text-info me-2"
                                    />
                                    Access more then 100K online courses
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className="text-warning me-2"
                                    />
                                    Learn the latest skills
                                </li>
                            </ul>
                            <Button variant="outline-success" size="lg">
                                Apply now
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="student-feedback bg-primary text-light text-start py-5 my-5">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="fw-bold">
                                Student
                                <br />
                                Community Feedback
                            </h1>
                            <p className="lead">
                                “After I started learning design with Quillow, I
                                realized that I had improved to very advanced
                                levels. While I am studying at my university, I
                                design as an additional income and I am sure
                                that I will do this professionally.”
                            </p>
                            <div className="feedback-info d-flex align-items-center">
                                <h4 className="m-0 me-2 fw-bold">James Lee,</h4>
                                <span>Student @EduHub Institute</span>
                            </div>
                            <div className="student-images mt-4">
                                <Image
                                    src="https://randomuser.me/api/portraits/med/men/75.jpg"
                                    className="me-4"
                                    roundedCircle
                                />
                                <Image
                                    src="https://randomuser.me/api/portraits/med/women/75.jpg"
                                    className="me-4"
                                    roundedCircle
                                />
                                <Image
                                    src="https://randomuser.me/api/portraits/med/women/1.jpg"
                                    className="me-4"
                                    roundedCircle
                                />
                                <Image />
                                <Image />
                            </div>
                        </Col>
                        <Col>
                            <div className="feedback-vedio-section">
                                <div className="feedback-vedio">
                                    <iframe
                                        className="w-100"
                                        height="400"
                                        src="https://www.youtube.com/embed/Rr0uFzAOQus"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default About;
