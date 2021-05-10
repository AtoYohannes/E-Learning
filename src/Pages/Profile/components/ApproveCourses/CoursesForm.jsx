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
    const { activeTab } = this.state;
    return (
      <Card className="border-0 bg-background">
        <CardBody className="bg-background ">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "course_title",
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
                  name: "number_of_chapters",
                  label: "Number of Chapters",
                  type: "number",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "teacher",
                  label: "Assigned Teacher",
                  type: "number",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "university",
                  label: "University Name",
                  type: "number",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "category",
                  label: "Category",
                  options: ["Category One", "Category Two"],
                })}
              </Col>
              <Col md={12} sm={12} xs={12}>
                {this.renderInput({
                  name: "brief",
                  label: "Course Description",
                  type: "textarea",
                })}
              </Col>
              <Col md={12} xs={12} sm={12}>
                <div className="formStepper">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === "1"
                            ? "activepageTab"
                            : "notactivepageTab"
                        }
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        Chapter One
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === "2"
                            ? "activepageTab"
                            : "notactivepageTab"
                        }
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Chapter Two
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === "3"
                            ? "activepageTab"
                            : "notactivepageTab"
                        }
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        Chapter Three
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Chapters />
                    </TabPane>
                    <TabPane tabId="2">
                      <Chapters />
                    </TabPane>
                    <TabPane tabId="3">
                      <Chapters />
                    </TabPane>
                  </TabContent>
                </div>
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
