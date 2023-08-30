import React from "react";
import AllPizzas from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = ({ items, setItems, varient, setVarient, p, setP }) => {
  return (
    <>
      <Container>
        <Row>
          {AllPizzas.map((pizza, i) => (
            <Col md={4}>
              <Pizza
                pi={pizza}
                i={i}
                item={items}
                setItems={setItems}
                varient={varient}
                setVarient={setVarient}
                p={p}
                setP={setP}
              />{" "}
              {/* as a prop we are passing (pi) into pizza component , storing purpose*/}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
