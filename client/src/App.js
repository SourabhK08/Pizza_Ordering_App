import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Policy from "./components/Policy";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <NavBar />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
