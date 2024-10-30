import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function SafeEntrance() {
  return (
    <Row style={{ height: "30px", backgroundColor: "#1c2b55" }}>
        <Col md={12} className="d-flex align-items-center justify-content-center">
            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAABHNCSVQICAgIfAhkiAAAAPtJREFUKFONkgsNwjAYhFcH4AAUgAOGAuYAJAwFgAKYA1AAUwASJgEczEG5b2mXpuzBn1y2tnf/41qTRGGtzbR1EJbCQzgZY6qQZsKFBKnWT+EjQGRthbmEtefGIjJvhCmkIMle60uf6MWBCFRoQkIq0eLxR+Synt1BHrRNoqtQ+NmMI9+1OQmIfb9vHawR8UOQbSxwtUREz5QOW+oUi0qriRe1g+qA+2G21FXHucbuIRHZEPLF/ptEuzER7ZYiZspMhcpfwVAlDNkKCHA0bL13Jojc/owWw0uNK/3rHu+xxj1KLpxT7aNk8CiojCEFIpyinVUHMd66aSP/AuXKnaBmx39PAAAAAElFTkSuQmCC"
                alt="Icon"
                style={{ marginRight: "7px", marginLeft: "10px" }} // Adjust the spacing between the image and text as needed
            />
            <p style={{ color: 'white', margin: 0 }}>כניסה בטוחה לשירותי הדיגיטל של ישראל</p>
        </Col>
    </Row>
  )
}