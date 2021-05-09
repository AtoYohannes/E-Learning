import React from "react";
import { MdVideoCall } from "react-icons/md";
import { Card } from "reactstrap";
import { selectContents } from "store/States/Contents"
import { selectMainBuffer } from "store/States/Buffer"
import { getContentsFromChapter } from "helpers/customResolvers"
import { connect } from "react-redux"
import { UpdateMainBuffer } from "store/States/Buffer"

const CourseHeader = ({ contents, buffer, UpdateMainBuffer }) => {
  console.log("new", buffer.selectedContent)
  return (
    <Card className="singleCourseInsiderContainer">
      <h5>Course Contents</h5>
      <hr />
      <div className="contents">
        {getContentsFromChapter(buffer.selectedChapter, contents).map((content) => (
          <div onClick={() => UpdateMainBuffer({ selectedContent: content._id })}>
            <Card className="content" style={{
              backgroundColor: buffer.selectedContent === content._id? "gray" : ""
              }}>
              <icon>
                <MdVideoCall size={25} />
              </icon>
              <h6 style={{
                color: buffer.selectedContent === content._id? "white" : ""
              }}>{content.title}</h6>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
};


const mapStateToProps = state => ({
  contents: selectContents(state),
  buffer: selectMainBuffer(state)
})

const mapDispatchToProps = dispatch => ({
  UpdateMainBuffer: data => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseHeader);