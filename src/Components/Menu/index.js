import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.jpg';
import './Menu.css';

 function BaseMenu(props) {
    const { location } = props
    return(
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Logo FullStackEletro"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu"/>
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3" >
                    <Nav.Item>
                        <Nav.Link as={Link} href="/home" to="/home">Págian Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">Fale Conosco</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu= withRouter(BaseMenu);

export default Menu