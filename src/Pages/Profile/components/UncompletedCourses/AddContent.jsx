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

class AddContent extends ParentForm {
  constructor(props) {
    super(props);
    this.initialState = {
      activeTab: "1",
      data: {
        id: "",
        chapterID: "",
        title: "",
        contentType: "",
        contentData: "",
        isMandatory: false,
        timeRequiredInMinutes: "",
      },
      errors: {},
    };
    this.state = this.initialState;
    this.schema = {
      id: Joi.string().allow("").optional(),
      title: Joi.string().min(2).max(50).required(),
      chapterID: Joi.string().min(2).max(50).required(),
      title: Joi.string().min(2).max(50).required(),
      contentType: Joi.string().min(2).max(50).required(),
      contentData: Joi.string().min(2).max(50).required(),
      isMandatory: Joi.boolean().allow(false).required(),
      timeRequiredInMinutes: Joi.number().min(1).max(50).required(),  
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
        chapterID: data.chapterID,
        title: data.title,
        contentType: data.contentType,
        contentData: data.contentData,
        isMandatory: data.isMandatory,
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
                  label: "Content Title",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "chapterID",
                  label: "Chapter",
                  options: this.props.options.chapters.map(chapter => ({
                    ...chapter,
                    name: chapter.title
                  })),
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderSelect({
                  name: "contentType",
                  label: "Content Type",
                  options: [
                    { _id: "VIDEO", name: "Video" },
                    { _id: "PDF", name: "PDF" },
                    { _id: "CONTENT", name: "Content" },
                  ],
                  optionsFrom: "server"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "contentData",
                  label: "Content Data",
                  type: "textarea"
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderCheckbox({
                  name: "isMandatory",
                  label: "Is Mandatory",
                })}
              </Col>
              <Col md={4} sm={6} xs={12}>
                {this.renderInput({
                  name: "timeRequiredInMinutes",
                  label: "Time Required in Minutes",
                  type: "number"
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
export default AddContent;
