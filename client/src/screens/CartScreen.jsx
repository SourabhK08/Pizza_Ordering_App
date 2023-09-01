import { React, useState } from "react";
import useStore from "../components/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";

const CartScreen = () => {
  const selectedItems = useStore((state) => state.selectedItems);

  const [ingredients, setIngredients] = useState([]);
  const handleItemSelected = (selectedItem) => {
    setIngredients((prevItems) => [...prevItems, selectedItem]);
  };

  const handleButton = () => {
    axios.get(`http://localhost:3000/user/list`);
  };

  return (
    <>
      <Card
        style={{
          width: "50%",
          marginTop: "50px",
          border: "solid white   5px",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
            {" "}
            Cart orders{" "}
          </Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                {selectedItems.map((item) => (
                  <>
                    <h1> {item[0].name} </h1>
                    <h2> Quantity: {item[0].quantity} </h2>
                    <h2> Size: {item[0].size} </h2>
                    <h2> Price: {item[0].price} </h2>
                    <h2> Id: {item[0].id} </h2>

                    <hr />
                  </>
                ))}
              </Col>
              <Col md={4}>
                {selectedItems.map((item) => (
                  <>
                    <h6>Ingredients</h6> {item[0].ingredients}
                  </>
                ))}
              </Col>
              <Button onClick={handleButton}>Addd</Button>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartScreen;
