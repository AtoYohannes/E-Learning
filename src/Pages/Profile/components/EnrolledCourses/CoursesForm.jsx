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
import Chapters from "./chapters/chapters";

class FoodsForm extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      activeTab: "1",
      data: {
        title: "",
        briefIntroduction: "",
        language: "",
        numberOfChapters: "",
        teacherID: "",
        universityID: "",
        categoryID: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      id: Joi.string().allow("").optional(),
      title: Joi.string().min(2).max(50).required(),
      briefIntroduction: Joi.string().min(2).max(50).required(),
      language: Joi.string().min(2).max(50).required(),
      numberOfChapters: Joi.string().min(2).max(50).required(),
      teacherID: Joi.string().min(2).max(50).required(),
      universityID: Joi.string().min(2).max(50).required(),
      categoryID: Joi.string().min(2).max(50).required(),
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
        briefIntroduction: data.briefIntroduction,
        language: data.language,
        numberOfChapters: data.numberOfChapters,
        teacherID: data.teacherID,
        universityID: data.universityID,
        categoryID: data.categoryID,
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
                  label: "Course Title",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "language",
                  label: "Language",
                  options: ["Amharic", "English", "Arabic"],
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "numberOfChapters",
                  label: "Number of Chapters",
                  type: "number",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "teacherID",
                  label: "Assigned Teacher",
                  options: this.props.options.teachers.map(item => ({
                    ...item,
                    name: item.firstName + " " + item.lastName
                  })),
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "universityID",
                  label: "University Name",
                  options: this.props.options.universities,
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "categoryID",
                  label: "Category",
                  options: this.props.options.categories,
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "briefIntroduction",
                  label: "Course Description",
                  type: "textarea",
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
export default FoodsForm;
