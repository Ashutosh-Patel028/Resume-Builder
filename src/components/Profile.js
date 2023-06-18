import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile(){

    return (
        <React.Fragment>
            <Row className="justify-content-center">
            <Col md={8} sm={12} className="d-flex justify-content-between img-column">
                <img src={file} className="profile-image" alt="..."></img>
                
                <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
            </Col>
            </Row>
        </React.Fragment>
    )
}