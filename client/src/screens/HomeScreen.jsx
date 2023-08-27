import React from "react";
import AllPizzas from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {AllPizzas.map((pizza) => (
            <Col md={4}>
              <Pizza pi={pizza} />{" "}
              {/* as a prop we are passing (pi) into pizza component , storing purpose*/}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
