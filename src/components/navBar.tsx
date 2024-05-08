"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    const pathName = usePathname()

    return (
        <Navbar data-bs-theme="dark" bg="primary" expand="lg" className="bg-body-tertiary" sticky="top" collapseOnSelect >
            <Container>
                <Navbar.Brand as={Link} href="/">NextJS image website</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link href="/hello" active={pathName === "/hello"}> Hello </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );



}