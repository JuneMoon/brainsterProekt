import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler
} from "reactstrap";

class NavbarNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-main navbar-transparent navbar-light"
            expand="lg"
            id="navbar-main">
          
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink
                        href=""
                        target="_blank"
                    >
                        Регистрирај се
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href=""
                        target="_blank"
                    >
                        Најави се
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="https://www.brainster.io/about"
                        target="_blank"
                    >
                        За нас
                    </NavLink>  
                </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand className="align-items-lg-center mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brainlogo.png")}
                />
        </NavbarBrand>
          <NavItem>
              <Button href="https://www.brainster.io/business">Обуки за компании</Button>
          </NavItem>
          <NavItem>
            <Button href="https://www.brainster.io/business">Вработи наши студенти</Button>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavbarNav;