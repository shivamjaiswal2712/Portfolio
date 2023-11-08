import React from "react";
import { Col, Row } from "react-bootstrap";

const Techstack = (props) => {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
        {props.name}
      </Col>
    </Row>
    </>
  );
}

export default Techstack;