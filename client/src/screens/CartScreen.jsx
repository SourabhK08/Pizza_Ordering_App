import React from "react";
import useStore from "../components/Store";
import { Container, Row, Col } from "react-bootstrap";
const CartScreen = ({ items, p }) => {
  const varient = useStore((state) => state.varient);
  console.log(varient);
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart Items</h1>
            {items.map((items) => (
              <>
                <h1> {varient} </h1>
                <h1> {items} </h1>
                <h1> {p} </h1>
              </>
            ))}
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
