import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Modal from "react-bootstrap/Modal";

import useStore from "./Store";

const Pizza = ({ pi, item, setItems, setVarient, setP }) => {
  {
    /*   USE OF ZUSTAND  */
  }

  const varient = useStore((state) => state.varient);
  const varient_fn = useStore((state) => state.varient_fn);

  const [v, setV] = useState("small"); //varient
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleItemSelected = (selectedItem) => {
    setIngredients((prevItems) => [...prevItems, selectedItem]);
    setPrice((prevItems) => prevItems + pi.prices[1][selectedItem]);
  };
  //console.log(price);
  // console.log(ingredients  );

  {
    /* for modals */
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleButton(e) {
    e.preventDefault();
    setItems(ingredients);
    setVarient(v);
    // setP(price);
  }

  const addToSelected = useStore((state) => state.addToSelected);
  const removeFromSelected = useStore((state) => state.removeFromSelected);
  const selectedItems = useStore((state) => state.selectedItems);

  const handleDropdownChange = (item, newSize) => {
    const updatedItem = { ...item, size: newSize };

    if (selectedItems.some((i) => i.id === item.id)) {
      removeFromSelected(item);
      addToSelected(updatedItem);
    }
  };

  console.log("pi", pi);

  // function handleChange(e) {}

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
                <select
                  value={pi.size}
                  onChange={(e) => handleDropdownChange(pi, e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </Col>

              <Col md={8}>
                <br />
                <h6>Ingredients</h6>
                {/* <select
                  value={ingredients}
                  onChange={(e) => handleItemSelected(e.target.value)}
                >
                  {" "}
                  {pi.ingredients.map((ingredients) => (
                    <option> {ingredients} </option>
                  ))}{" "}
                </select> */}
              </Col>
              <Col md={8}>
                <br />
                <h6>Ingredients</h6>
                {ingredients.map((item) => {
                  return (
                    <>
                      {" "}
                      <Button variant="dark" style={{ margin: "5px" }}>
                        {item}
                      </Button>{" "}
                    </>
                  );
                })}
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
              {(pi.prices[0][v] + parseInt(price)) * quantity}{" "}
            </Col>
            <Col md={6}>
              <Button className="bg-warning text-black" onClick={handleButton}>
                {" "}
                Add To Cart{" "}
              </Button>{" "}
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
