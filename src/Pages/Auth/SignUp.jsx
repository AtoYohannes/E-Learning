import React from "react";
import {
  Button,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Col,
} from "reactstrap";

const SignIn = () => {
  return (
    <div className="authContainer">
      <CardHeader className="bg-background">Sign In</CardHeader>
      <CardBody>
        <FormGroup>
          <Label>Full Name</Label>
          <Input placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label>Repeat Password</Label>
          <Input placeholder="Repeat Password" />
        </FormGroup>
        <Col align="center">
          <Button>Login</Button>
        </Col>
      </CardBody>
    </div>
  );
};
export default SignIn;
