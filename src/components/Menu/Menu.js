// BOOTSTRAP/EXTERNAL IMPORTS
import { Container, Nav, Navbar } from 'react-bootstrap'
// LOCAL IMPORTS
import { MenuItems } from './MenuItems'
// CSS IMPORTS
import './Menu.css'

export default function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar py-0">
        <Container id="main-navbar">
          <Navbar.Brand className={"brand-name"} href="#home">CANDY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {MenuItems.map((item, index) => (
                <Nav.Link key={index} className={item.cName} href={item.url}>
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}