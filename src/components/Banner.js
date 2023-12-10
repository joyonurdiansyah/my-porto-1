
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg';
export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portofolio</span>
                        <h1>{`Hi I'm Junior web developer`} <span className="wrap">Web Developer</span></h1>
                        <p>Welcome to my portfolio. I am a passionate Junior Web Developer with a focus on web development using PHP and JavaScript. With a strong background in both programming languages, I am suited to create innovative, responsive and user-friendly web solutions.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="" srcset="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}