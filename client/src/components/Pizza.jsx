import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-hot-toast";

import useStore from "./Store";

const Pizza = ({ pi, setConfig, config, i }) => {
  // FOR MODALS
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // FOR CALCULATING QUANTITY AND PRICE
  const [itemData, setItemData] = useState({
    id: i,
    name: pi.name,
    price: 0,
    quantity: 0,
    size: "",
  });

  const handleUpdate = (type, value) => {
    let updatedItemData = { ...itemData };

    // console.log("Type:", type);
    // console.log("Value:", value);

    if (type === "quantity") {
      updatedItemData.quantity = value;
    } else if (type === "size") {
      updatedItemData.size = value;
    }

    if (updatedItemData.quantity !== 0 && updatedItemData.size !== "") {
      // console.log("Quantity:  ", updatedItemData.quantity);
      // console.log("Size:", updatedItemData.size);

      let calculatedPrice = 0;

      if (updatedItemData.size === "small") {
        calculatedPrice = updatedItemData.quantity * 99;
      } else if (updatedItemData.size === "medium") {
        calculatedPrice = updatedItemData.quantity * 199;
      } else if (updatedItemData.size === "large") {
        calculatedPrice = updatedItemData.quantity * 399;
      }
      updatedItemData.price = calculatedPrice;
    }

    setItemData(updatedItemData);

    const containsItemWithId = config.some(
      (item) => item.id === updatedItemData.id
    );

    if (containsItemWithId) {
      const updatedConfig = config.map((item) =>
        item.id === updatedItemData.id
          ? {
              ...item,
              quantity: updatedItemData.quantity,
              size: updatedItemData.size,
              price: updatedItemData.price,
            }
          : item
      );
      setConfig(updatedConfig);
    } else {
      setConfig([...config, updatedItemData]);
    }
  };

  const addToSelected = useStore((state) => state.addToSelected);

  const addToCart = (setItemData) => {
    if (!itemData.quantity || !itemData.size) {
      toast.error(
        "Please Select Varient And Quantity Before Adding To The Cart"
      );
    } else {
      const item = config.filter((it) => it.id === i);
      addToSelected(item);

      toast("Successfully Added To The Cart", {
        icon: "👏",
      });
    }
  };

  return (
    <>
      <Card
        style={{
          width: "20rem",
          marginTop: "50px",
          border: "solid white 5px",
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
                  value={itemData.size}
                  onChange={(e) => handleUpdate("size", e.target.value)}
                >
                  <option value="">select</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </Col>

              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  onChange={(e) =>
                    handleUpdate("quantity", parseInt(e.target.value))
                  }
                >
                  {[...Array(11).keys()].map((a, index) => (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              Price : <LiaRupeeSignSolid /> {itemData.price}
            </Col>
            <Col md={6}>
              <Button di className="bg-warning text-black" onClick={addToCart}>
                {" "}
                Add To Cart{" "}
              </Button>{" "}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Using Modals for giving specific info about pizzas */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pi.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pi.image}
              style={{
                height: "180px",
                border: "1px solid black",
              }}
            />
          </div>
          <hr />
          <div>
            <h5>
              <b>Description :-</b>
            </h5>
            <h6>{pi.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
