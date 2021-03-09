import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">REACTSTRAP</NavbarBrand> */}
          <Link to="/" style={{ textDecoration: "none", color: "#7c7c7d" }}>
            REACTSTRAP
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    to="form1"
                    style={{ textDecoration: "none", color: "#7c7c7d" }}
                  >
                    Form Demo 1
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    to="form2"
                    style={{ textDecoration: "none", color: "#7c7c7d" }}
                  >
                    Form Demo 2
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
