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
import CustomTable from "common/table"
import { getContentsFromChapter } from "helpers/customResolvers"

const ViewContents = ({ data, options }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "contentType", label: "Content Type" },
    { path: "isMandatory", label: "Is Mandatory" },
    { path: "timeRequiredInMinutes", label: "Time Required" },
  ]
  console.log("here", data)

  return (
    <Card className="border-0 bg-background">
      <CardBody className="bg-background ">
      <CustomTable data={getContentsFromChapter(data.chapterID, options.contents)} columns={columns} title="Contents" />
      </CardBody>
    </Card>
  )
}

export default ViewContents;
