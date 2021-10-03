import { Col, Container, Image, Row } from 'react-bootstrap';
import HeroImage from '../../images/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <Container>
                <Row className="align-items-center text-start">
                    <Col xs={12} md={6}>
                        <h1 className="hero-title display-4 fw-bold text-start">
                            Launch your Own online learning Platform
                        </h1>
                        <h4 className="fw-bold mt-4">
                            Unlimited access to all 60+ instructors.
                        </h4>
                        <p className="text-muted">
                            2 passes (with access to all classes) for $240
                        </p>
                        <div className="input-group my-5 w-75">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="What do you want to learn?"
                            />
                            <button
                                className="btn btn-outline-dark"
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={HeroImage} rounded />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
