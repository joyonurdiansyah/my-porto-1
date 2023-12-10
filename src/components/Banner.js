
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta, quidem odio aspernatur expedita explicabo libero aliquam? Dolores reiciendis vel, explicabo consequuntur molestiae labore quisquam eius inventore impedit repellendus esse.</p>
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