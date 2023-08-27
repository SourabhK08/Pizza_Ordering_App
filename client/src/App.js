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

function App() {
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
              <HomeScreen />
            </Container>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Container>
              <CartScreen />
            </Container>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
