import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Policy from "./components/Policy";
import NavBar2 from "./components/NavBar2";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [items, setItems] = useState([]);
  const [varient, setVarient] = useState([]);
  const [p, setP] = useState([]);
  //console.log(items);
  console.log(p);

  return (
    <BrowserRouter>
      {" "}
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route
          path="/about"
          element={
            <Container>
              {" "}
              {/* Container is used to wrap components */}
              <AboutUs />
            </Container>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <Container>
              <ContactUs />
            </Container>
          }
        ></Route>

        <Route
          path="/policy"
          element={
            <Container>
              <Policy />
            </Container>
          }
        ></Route>

        <Route
          path="/"
          element={
            <Container>
              <HomeScreen
                setItems={setItems}
                items={items}
                varient={varient}
                setVarient={setVarient}
                p={p}
                setP={setP}
              />
            </Container>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <Container>
              <CartScreen items={items} varient={varient} p={p} />
            </Container>
          }
        ></Route>

        <Route
          path="/register"
          element={
            <Container>
              <RegisterScreen />
            </Container>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <Container>
              <LoginScreen />
            </Container>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
