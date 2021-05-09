import Joi from "joi-browser";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import ParentForm from "../../../../common/form";

class UncompleteCourseForm extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      activeTab: "1",
      data: {
        id: "",
        title: "",
        courseID: "",
        numberOfReading: "",
        numberOfVideos: "",
        numberOfAssignments: ""
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      id: Joi.string().allow("").optional(),
      title: Joi.string().min(2).max(50).required(),
      courseID: Joi.string().min(2).max(50).required(),
      numberOfReading: Joi.string().min(2).max(50).required(),
      numberOfVideos: Joi.string().min(2).max(50).required(),
      numberOfAssignments: Joi.string().min(2).max(50).required(),
    };
  }
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  populateState(data) {
    const updatedState = {
      ...this.state,
      data: {
        id: data._id ? data._id : "",
        title: data.title,
        courseID: data.courseID,
        numberOfReading: data.numberOfReading,
        numberOfVideos: data.numberOfVideos,
        numberOfAssignments: data.numberOfAssignments,
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
    const { activeTab } = this.state;
    return (
      <Card className="border-0 bg-background">
        <CardBody className="bg-background ">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "title",
                  label: "Chapter Title",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "courseID",
                  label: "Course",
                  options: this.props.options.courses.map(course => ({
                    ...course,
                    name: course.title
                  })),
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "numberOfReading",
                  label: "Number of Reading Hours",
                  type: "number",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "numberOfVideos",
                  label: "Number of Videos",
                  type: "number"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "numberOfAssignments",
                  label: "Number of Assignments",
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
export default UncompleteCourseForm;
