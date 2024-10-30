// src/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <img
                        src="https://login.gov.il/nidp/GOV/static/media/menorah.ebe1ba3fb00df3d83563a478a9821a04.svg"
                        alt="Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                <Navbar.Brand href="#home">מערכת הזדהות לאומית</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <img height={20} style={{marginRight:"15px", marginLeft:"1320px"}} src="data:image/png;base64,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"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{paddingLeft:0}}>
                    <img src="https://login.gov.il/nidp/GOV/static/media/globe.fa084e06ed42730c581e309cb9232934.svg"/>
                    <NavDropdown title="עברית" id="language-dropdown">
                    עברית
                        <NavDropdown.Item href="#english">English</NavDropdown.Item>
                        <NavDropdown.Item href="#french">العربية</NavDropdown.Item>
                        <NavDropdown.Item href="#french">Русский</NavDropdown.Item>
                    </NavDropdown>
                        
                            
                        <Nav.Link>
                            <img src='https://login.gov.il/nidp/GOV/static/media/life_saver.58671fcea6a73e39513d4108a7010277.svg'/>
                            <span>&nbsp;&nbsp;עזרה</span>
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
