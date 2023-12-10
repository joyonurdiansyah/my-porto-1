    import { useState, useEffect } from "react"
    import { Navbar, Container, Nav } from "react-bootstrap"
    import logo from '../assets/img/logo-joy.png';
    import navIcon1 from '../assets/img/nav-icon1.svg';
    import navIcon2 from '../assets/img/nav-icon2.svg';
    import navIcon3 from '../assets/img/nav-icon3.svg';

    export const NavBar = () => {
        const [activeLink, setactiveLink] = useState('home');
        const [scrolled, seScrolled] = useState(false);

        useEffect(() => {
            const onScroll = () => {
                if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
        }, [])

            const onUpdateActiveLink = (value) => {
                setactiveLink(value);
            }

            return (
                <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                    <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ maxWidth: '60px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/joyo-nurdiansyah/"><img src={navIcon1} alt="linkedin" /></a>
                            <a href="https://www.facebook.com/joyo.nurdiansyah.7"><img src={navIcon2} alt="facebook" /></a>
                            <a href="https://www.instagram.com/joyonurdiansyah/"><img src={navIcon3} alt="instagram" /></a>
                        </div>
                        {/* <a href="https://wa.me/081316133984?text=Halo%20Bang%20Joy">
                            <button class="vvd"><span>Let’s Connect</span></button>
                        </a> */}
                        </span>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
    }