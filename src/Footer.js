// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-white py-4 mt-5 footer">
            <Container fluid style={{paddingBottom:0}}>
                <Row>
                    <Col md={12} className="d-flex">
                        <img src='https://login.gov.il/nidp/GOV/static/media/lock.865c15af2bf2f346c005e6710486213c.svg'/>
                        <h5>‏תקן אבטחה ISO-27032 ו- ISO-27001</h5>
                    </Col>
                </Row>
                <Row style={{color:'#606a8c', paddingTop:10, paddingBottom:10}}>
                        <Col md={1}><NavLink>אודות האתר</NavLink></Col>
                        <Col md={1}><NavLink>שאלות ותשובות</NavLink></Col>
                        <Col md={1}><NavLink>מוקד תמיכה</NavLink></Col>
                        <Col md={1}><NavLink>הצהרת נגישות</NavLink></Col>
                        <Col md={1}><NavLink>תנאי שימוש</NavLink></Col>
                </Row>
                <p>כל הזכויות שמורות למערך הדיגיטל הלאומי</p>
            </Container>
        </footer>
    );
};

export default Footer;
