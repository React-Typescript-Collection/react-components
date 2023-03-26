import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDocumentTitle } from '../hooks';

const ContainerExample = () => {
  useDocumentTitle("Container Example");
  
  return (
    <Container style={{ backgroundColor: "grey" }}>
      {/* https://react-bootstrap.github.io/layout/grid/ */}
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default ContainerExample;