import Joi from "joi-browser";
import React from "react";
import { Card, CardBody, CardFooter, Col, Form, Row } from "reactstrap";
import ParentForm from "../../../../../common/form";
import ReactPlayer from "react-player";

class ChaptersForm extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      type: "",
      data: {
        name: "",
        image: "",
        subtitle: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      _id: Joi.string().allow("").optional(),
      name: Joi.string().min(2).max(50).required(),
      subtitle: Joi.string().allow("").optional(),
      image: Joi.any().allow("").optional(),
    };
  }

  populateState(data) {
    const updatedState = {
      ...this.state,
      data: {
        _id: data._id ? data._id : "",
        name: data.name,
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
                {this.renderCheckbox({
                  label: "Mandatory",
                })}
              </Col>
              <Col md={2} sm={12} xs={12}>
                {this.renderSelect({
                  name: "type",
                  label: "Content Type",
                  options: ["PDF", "Video", "Reading"],
                })}
              </Col>
              <Col md={10} sm={12} xs={12}>
                <ReactPlayer
                  width="100%"
                  stopOnUnmount={false}
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
              </Col>
            </Row>

            <CardFooter className="bg-background" align="right">
              {this.renderButton("Add")}
            </CardFooter>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default ChaptersForm;
