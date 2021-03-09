import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="success"> {cartItem.quantity}</Badge>
              &nbsp;
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                X
              </Badge>
            </DropdownItem>
          ))}
          <div style={{ backgroundColor: "#95a5a6", textAlign:"center", borderTopLeftRadius:10, borderBottomLeftRadius:10, 
        borderTopRightRadius:10, borderBottomRightRadius:10
        }}>
            <Link to="cart" style={{ textDecoration:"none", color:"#fff"}}>Go To Cart</Link>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpytCart() {
    return (
      <NavItem>
        <NavLink>Empyt Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmpytCart()}
      </div>
    );
  }
}
