import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Modal from "react-bootstrap/Modal";

const Pizza = ({ pi }) => {
  const [v, setV] = useState("small"); //varient
  const [ingredients, setIngredients] = useState("Cheese Brust");
  const [quantity, setQuantity] = useState(0);

  {
    /* for modals */
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        style={{
          width: "20rem",
          marginTop: "50px",
          border: "solid white   5px",
        }}
      >
        <Card.Img
          variant="top"
          src={pi.image}
          style={{ height: "180px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title> {pi.name} </Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select value={v} onChange={(e) => setV(e.target.value)}>
                  {" "}
                  {pi.varients.map((v) => (
                    <option> {v} </option>
                  ))}{" "}
                </select>
              </Col>
              <Col md={8}>
                <br />
                <h6>Ingredients</h6>
                <select
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                >
                  {" "}
                  {pi.ingredients.map((ingredients) => (
                    <option> {ingredients} </option>
                  ))}{" "}
                </select>
              </Col>

              {/* <Col md={6}>
                <h6>Price</h6>
                <select >
                  {pi.prices.map((p) => (
                    <option value={p}> {p} </option>
                  ))}{" "}
                </select>
              </Col> */}

              <Col md={6}>
                <br />
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(11).keys()].map((a, index) => (
                    <option value={a}>{a}</option>
                  ))}
                </select>
                {/* index + 1  => for showing qt 1 */}
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              Price : <LiaRupeeSignSolid />{" "}
              {(pi.prices[0][v] + pi.prices[1][ingredients]) * quantity}{" "}
            </Col>
            <Col md={6}>
              <Button className="bg-warning text-black"> Add To Cart </Button>{" "}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/*Using Modals for giving specific info about pizzas */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pi.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            <Card.Img
              variant="top"
              src={pi.image}
              style={{
                height: "180px",
                border: "1px solid black",
              }}
            />
          </div>{" "}
          <hr />
          <div>
            <h5>
              {" "}
              <b>Description :-</b>{" "}
            </h5>
            <h6>{pi.description} </h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
