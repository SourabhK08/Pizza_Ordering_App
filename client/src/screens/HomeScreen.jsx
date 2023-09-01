import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import AllPizzas from "../pizza-data";

const HomeScreen = () => {
  const [config, setConfig] = useState([]);
  return (
    <Container>
      <Row>
        {AllPizzas.map((pizza, i) => (
          <Col md={4} key={i}>
            <Pizza pi={pizza} i={i} config={config} setConfig={setConfig} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
