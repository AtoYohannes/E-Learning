import PDFViewer from "pdf-viewer-reactjs";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button, CardFooter, Col } from "reactstrap";
import { selectContents } from "store/States/Contents"
import { selectMainBuffer, UpdateMainBuffer } from "store/States/Buffer"
import { getSingleContentFromChapter, getPrevContent, getNextContent } from "helpers/customResolvers"
import { connect } from "react-redux"
import contentTypes from "Config/contentTypes"
import CardBody from "reactstrap/lib/CardBody";

const Body = ({ buffer, contents, UpdateMainBuffer }) => {
  const [currentContent, setCurrentContent] = useState({
    _id: "",
    title: "",
    chapterID: "",
    contentData: "",
    contentType: "",
    isMandatory: false,
  })


  useEffect(() => {
    if (buffer.selectedContent) {
      if (buffer.selectedContent._id !== currentContent._id) {
        setCurrentContent(
          getSingleContentFromChapter(buffer.selectedContent, contents)
        )
      }
    }
  }, [buffer.selectedContent, setCurrentContent])

  const renderContent = (contentType, content) => {
    switch (contentType) {
      case contentTypes.VIDEO: {
        return (
          <Col md={12} sm={12} xs={12}>
            <video src={content.contentData} controls />
          </Col>
        )
      }
      case contentTypes.PDF: {
        return (
          <PDFViewer
            document={{
              url: content.contentData
            }}
          />
        )
      }

      case contentTypes.CONTENT: {
        return (
            <p>{content.contentData}</p>
        )
      }

      default: {
        return <></>
      }
    }
  }

  const goPrev = () => {
    const prevContent = getPrevContent(currentContent._id, contents)
    if (prevContent) {
      UpdateMainBuffer({ selectedContent: prevContent._id })
      // setCurrentContent(prevContent)
    }
  }

  const goNext = () => {
    const nextContent = getNextContent(currentContent._id, contents)
    if (nextContent) {
      UpdateMainBuffer({ selectedContent: nextContent._id })
      // setCurrentContent(nextContent)
    }
  }

  return (
    <div className="singleCourseBodyInsiderContainer">
      {/* This is one Type of Content Type (PDF) */}
      <CardBody>
        {renderContent(currentContent.contentType, currentContent)}
      </CardBody>
      <CardFooter className="courseBodyFooters">
        <Button onClick={goPrev}>Previous</Button>
        <Button onClick={goNext}>Next</Button>
      </CardFooter>
    </div>
  );
};

const mapStateToProps = state => ({
  contents: selectContents(state),
  buffer: selectMainBuffer(state)
})

const mapDispatchToProps = dispatch => ({
  UpdateMainBuffer: data => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Body);
