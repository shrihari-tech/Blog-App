import Nav from 'react-bootstrap/Nav';
import "./NavbarBoot.css"
function NavbarBoot() {
  return (
      <Nav 
        className="custom-navbar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="custom-nav-link" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="custom-nav-link" href="/AboutPage">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="custom-nav-link" href="/ContactPage">Contact</Nav.Link>
        </Nav.Item>
      </Nav>


  );
}

export default NavbarBoot;