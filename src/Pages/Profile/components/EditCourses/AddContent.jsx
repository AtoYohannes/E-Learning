import Joi from "joi-browser";
import React from "react";
import { Button, Card, CardBody, CardFooter, Col, Form, Row } from "reactstrap";
import ParentForm from "../../../../common/form";
import { UploadImage } from "services/UploadImgage"

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
      file: {},
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

  async doSubmit() {
    const { data } = this.state;
    await UploadImage(this.state.file, (fileAddress) => {
      this.props.submit({
        ...this.state.data,
        contentData: fileAddress
      });
    })
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
              {false ? (
                <image src={this.state.data.contentData} />
              ) : (
                <input
                  type="file"
                  onChange={async (event) => {
                    // this.setState({ file })
                    const { name, files } = event.target;
                    this.setState({
                      contentData: URL.createObjectURL(files[0]),
                    });
                    this.setState({ file: files[0] });
                  }}
                />
              )}
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
                  options: this.props.options.chapters.map((chapter) => ({
                    ...chapter,
                    name: chapter.title,
                  })),
                  optionsFrom: "server",
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
                  optionsFrom: "server",
                })}
              </Col>
              {this.state.data.contentType === "CONTENT" ? (
                <Col md={4} sm={6} xs={12}>
                  {this.renderInput({
                    name: "contentData",
                    label: "Content Data",
                    type: "textarea",
                  })}
                </Col>
              ) : (
                <></>
              )}
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
                  type: "number",
                })}
              </Col>
            </Row>

            <CardFooter className="bg-background" align="center">
              {/* {this.renderButton("Save", (data) => {
                console.log("here", data)
              })} */}
              <Button
                size="sm"
                className="pr-3 pl-3 buttons"
                onClick={() => this.doSubmit()}
              >
                Work
              </Button>
            </CardFooter>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddContent;
