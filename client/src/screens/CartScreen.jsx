import { React, useState } from "react";
import useStore from "../components/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { toast } from "react-hot-toast";
import { LiaRupeeSignSolid } from "react-icons/lia";

import axios from "axios";

const CartScreen = () => {
  const selectedItems = useStore((state) => state.selectedItems);

  // Calculate the total price
  const total = selectedItems.reduce((accumulator, item) => {
    return accumulator + item[0].price;
  }, 0);

  // const [ingredients, setIngredients] = useState([]);
  // const handleItemSelected = (selectedItem) => {
  //   setIngredients((prevItems) => [...prevItems, selectedItem]);
  // };

  const handleButton = () => {
    axios.get(`http://localhost:3000/user/list`);

    toast.success("Congratulations! Successfully Checked Out The Order");
  };

  return (
    <>
      <Container style={{ margin: "40px", marginTop: "50px" }}>
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
              {selectedItems.length === 0 ? (
                <p>Add Some Items To The Cart Before Proceeding To Checkout</p>
              ) : (
                <>
                  <Row>
                    <Col md={6}>
                      {selectedItems.map((item) => (
                        <>
                          <h2> {item[0].name} </h2>
                          <h3> Quantity: {item[0].quantity} </h3>
                          <h3> Size: {item[0].size} </h3>
                          <h3> Price: {item[0].price} </h3>
                          {/* <h2> Id: {item[0].id} </h2> */}

                          <hr />
                        </>
                      ))}
                    </Col>
                    {/* <Col md={4}>
                {selectedItems.map((item) => (
                  <>
                    <h6>Ingredients</h6> {item[0].ingredients}
                  </>
                ))}
              </Col> */}
                    {selectedItems.length > 0 && (
                      <>
                        <h3>
                          {" "}
                          <b>
                            {" "}
                            Subtotal <LiaRupeeSignSolid />
                            {total}{" "}
                          </b>{" "}
                        </h3>
                        <Button
                          className="bg-warning text-black"
                          onClick={handleButton}
                        >
                          Checkout
                        </Button>
                      </>
                    )}
                  </Row>
                </>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CartScreen;
