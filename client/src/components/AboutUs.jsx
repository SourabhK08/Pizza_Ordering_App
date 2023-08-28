import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", backgroundColor: "white" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>About Us</h1>
        <hr />
        <Row>
          <Col md={4}>
            <h3>WHO WE ARE</h3>
          </Col>
          <Col md={7}>
            <p>
              There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not
              our people. And definitely not the way we live life. Around here,
              we don’t settle for anything less than food we’re proud to serve.
              And we don’t just clock in. Not when we can also become our best,
              make friends, and have fun while we’re at it.{" "}
              <b> We’re the pizza company that lives life unboxed.</b>
            </p>
            <p>
              We’re not for people who want to blend in: pushing boundaries is
              part of our heritage. We have more than 16,000 restaurants and
              350,000 team members in more than 100 countries. Whether it’s the
              original Stuffed Crust or putting a pizza in outer space, we never
              stop driving ourselves to deliver hot pizzas, fast every time –
              anywhere you want to enjoy it.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>WHAT WE’RE ABOUT</h3>
          </Col>
          <Col md={7}>
            At Pizza Hut, we don’t just make pizza. We make people happy. Pizza
            Hut was built on the belief that pizza night should be special, and
            we carry that belief into everything we do. With more than 55 years
            of experience under our belts, we understand how to best serve our
            customers through tried and true service principles:{" "}
            <b>
              We create food we’re proud to serve and deliver it fast, with a
              smile.
            </b>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>WHERE WE COME FROM</h3>
          </Col>
          <Col md={7}>
            In 1958, two brothers borrowed $600 from their mom to open a pizza
            place in Wichita, Kansas. They named it Pizza Hut, because their
            sign only had room for eight letters. How profound! Soon, the
            restaurant grew. Why? The pizza was awesome. The service felt like
            home. And the customers were treated like family. And we’ve been
            delivering that same food and service ever since.
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>FOR THE LOVE OF PIZZA SINCE 1958 </h3>
          </Col>
          <Col md={7}>
            From day one, the Carney brothers could look their customers in the
            eye and promise them the finest pizza in town — because they knew
            the farmers who grew the ingredients, and they knew those farmers
            cared about quality. Since then, our farmers have grown right
            alongside us, and the ingredients we use are still our highest
            priority. No one loves pizza more than Pizza Hut. That’s why pizza
            is in our name — and always will be.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
