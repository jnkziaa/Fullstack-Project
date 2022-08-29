import { Navbar, Container, Nav} from "react-bootstrap"
import {useState, useEffect} from "react"



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY>50) {
                setScrolled(true);
             } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#link" className={activeLink === 'link' ? "active navbar-link" : 'navbar-link'} onClick={()=>onUpdateActiveLink('link')}>Link</Nav.Link>
    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}