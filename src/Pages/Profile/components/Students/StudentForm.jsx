import Joi from "joi-browser";
import React from "react";
import { Card, CardBody, CardFooter, Col, Form, Row } from "reactstrap";
import ParentForm from "../../../../common/form";

class StudentForm extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      data: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        numberOfCoursesEnrolled: 0,
        numberOfCoursesCompleted: 0,
        image: "",
        subtitle: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      id: Joi.string().allow("").optional(),
      firstName: Joi.string().min(2).max(50).required(),
      lastName: Joi.string().min(2).max(50).required(),
      email: Joi.string().min(2).max(50).required(),
      numberOfCoursesEnrolled: Joi.number().min(2).max(100).required(),
      numberOfCoursesCompleted: Joi.number().min(2).max(100).required(),
      subtitle: Joi.string().allow("").optional(),
      image: Joi.any().allow("").optional(),
    };
  }

  populateState(data) {
    const updatedState = {
      ...this.state,
      data: {
        id: data._id ? data._id : "",
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        numberOfCoursesEnrolled: data.numberOfCoursesEnrolled,
        numberOfCoursesCompleted: data.numberOfCoursesCompleted,
        image: data.image,
        subtitle: data.subtitle,
      },
      lockUpdate: true,
    };
    this.setState(updatedState);
  }

  componentDidUpdate() {
    if ((this.props.isEdit || this.props.isView) && !this.state.lockUpdate) {
      this.populateState(this.props.data);
    }
  }
  componentDidMount() {
    this.componentDidUpdate();
  }

  doSubmit() {
    const { data } = this.state;
    this.props.submit(data);
  }

  handleImageDrop = (image) => {
    console.log(image[0].preview, "fasil");
    this.setState({ preview: image[0].preview });
  };

  render() {
    return (
      <Card className="border-0 bg-background">
        <CardBody className="bg-background ">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "firstName",
                  label: "First Name",
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "lastName",
                  label: "Last Name",
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "email",
                  label: "Email",
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "numberOfCoursesEnrolled",
                  label: "Number of Courses Enrolled",
                  type: "number",
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "numberOfCoursesCompleted",
                  label: "Number of courses completed",
                  type: "number",
                })}
              </Col>
            </Row>

            <CardFooter className="bg-background" align="center">
              {this.renderButton("Save")}
            </CardFooter>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default StudentForm;
