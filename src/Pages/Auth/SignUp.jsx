import React, { useState } from "react";
import {
  Button,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Col,
} from "reactstrap";
import { PostUser } from "store/States/User/action"
import { AddStudent } from "store/States/Students/"
import { callAPI } from "services/directCall"
import { UploadImage } from "services/UploadImgage"
import { AuthenticateUser, SetUserDetails, setUserID } from "store/States/User"
import { UpdateMainBuffer } from "store/States/Buffer/"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

const SignUp = ({
  AuthenticateUser, SetUserDetails, setUserID
}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [redirect, setRedirect] = useState("")
  const [file, setFile] = useState({})
  const [image, setImage] = useState("")
  const _postUser = async () => {
    // console.log("here", userInfo)
    await UploadImage(file, (imageAddress) => {
      callAPI(AddStudent(userInfo), "postStudent", (studentData) => {
        callAPI(PostUser({
          ...userInfo,
          image: imageAddress,
          externalID: studentData._id
        }), "postUser", (userData) => {
          console.log("two", studentData)
          AuthenticateUser()
          SetUserDetails(userData)
          setUserID(userData._id)
          UpdateMainBuffer({ studentData })
          setRedirect("/")
        })
      })
    })
  }
  return redirect.length > 0 ? <Redirect to={redirect} /> : (
    <div className="authContainer">
      <CardHeader className="bg-background">Sign Up</CardHeader>
      <CardBody>
        {image.length > 0 ?
          <image src={image} /> :
          <input type="file" onChange={async (event) => {
            const { name, files } = event.target;
            setFile(files[0])
            setImage(URL.createObjectURL(files[0]))
          }} />
        }
        <FormGroup>
          <Label>Full Name</Label>
          <Input placeholder="First Name" onChange={({ currentTarget: { value } }) => setUserInfo({
            ...userInfo, firstName: value
          })} />
        </FormGroup>
        <FormGroup>
          <Label>Full Name</Label>
          <Input placeholder="Last Name" onChange={({ currentTarget: { value } }) => setUserInfo({
            ...userInfo, lastName: value
          })} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="email" onChange={({ currentTarget: { value } }) => setUserInfo({
            ...userInfo, email: value
          })} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="password" onChange={({ currentTarget: { value } }) => setUserInfo({
            ...userInfo, password: value
          })} />
        </FormGroup>
        <Col align="center">
          <Button onClick={_postUser}>Sign Up</Button>
        </Col>
      </CardBody>
    </div>
  );
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  AuthenticateUser: () => dispatch(AuthenticateUser()),
  SetUserDetails:  data => dispatch(SetUserDetails(data)),
  setUserID: id => dispatch(setUserID(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
