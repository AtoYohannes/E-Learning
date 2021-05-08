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
          <Label>Email</Label>
          <Input placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="password" />
        </FormGroup>
        <Col align="center">
          <Button>Login</Button>
        </Col>
      </CardBody>
    </div>
  );
};
export default SignIn;
