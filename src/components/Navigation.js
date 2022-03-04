// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
import { Nav } from "react-bootstrap";

export default function Navigation() {
  // by setting the href to be the same as the routes we defined on App.js, the page we want will render based on the link chosen
  return (
    <Nav className="navigation" activeKey="/home">
      <Nav.Item >
        <Nav.Link href="/">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" >Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume">
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
