import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter description"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city">
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
                <option>Bursa</option>
                <option>Adana</option>
            </Input>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}
