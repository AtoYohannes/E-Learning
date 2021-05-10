import React from "react";
import {
  MdExitToApp,
  MdGroupAdd,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdPageview,
  MdPanoramaFishEye,
  MdPerson,
  MdPersonPin,
  MdQuestionAnswer,
  MdReorder,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from "reactstrap";
import routes from "../../Config/routes";
import bn from "../../utils/bemnames";
import Avatar from "../Avatar";
import UserCard from "../Card/UserCard";
import { RenderButton } from "../MainRender";
import { getAuthentication, DeAuthenticateUser } from "store/States/User"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
      isOpenUserCardPopover: false,
      redirect: ""
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };
  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = "cr-header";
    if (this.props.scrolled) {
      drawerClasses = " scrolledAppBar";
    }

    const setRedirect = (redirect) => {
      this.setState({ redirect })
    }

    return this.state.redirect.length > 0? <Redirect to={this.state.redirect} /> : (
      <>
        <Navbar light fixed="top" expand className={drawerClasses}>
          <Link
            to={{ pathname: routes.homePage }}
            style={{ textDecoration: "none" }}
          >
            <Nav navbar>LOGO </Nav>
          </Link>

          {isMobile && (
            <Nav navbar className="ml-2">
              Project Title
            </Nav>
          )}
          {isMobile ? (
            <Nav navbar className={bem.e("nav-right")}>
              <NavItem>
                <Popover
                  trigger="legacy"
                  placement="bottom"
                  isOpen={this.state.isAboutPopoverOpen}
                  toggle={this.toggleAboutPopover}
                  target="AboutPopover"
                  className="p-5 border"
                >
                  <PopoverBody className="p-2 border-light">
                    <ListGroup flush>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPerson className="mr-3" /> {"  "} About Us
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdHelp className="mr-3" /> How Project Title Works
                      </ListGroupItem>

                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPanoramaFishEye className="mr-3" /> Browse Project
                        Title
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdQuestionAnswer className="mr-3" /> FAQ
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPageview className="mr-3" /> Terms Of Service
                      </ListGroupItem>
                    </ListGroup>
                  </PopoverBody>
                </Popover>
                <NavLink onClick={this.toggleAboutPopover}>
                  <RenderButton
                    title={"Logout"}
                    outline
                    color="dark"
                    id="AboutPopover"
                    onClick={() => {
                      this.props.DeAuthenticateUser()
                      setRedirect("/login")
                    }}
                  />
                </NavLink>
              </NavItem>
              {/* {
                !this.props.isAuthenticated ? (
                  <></>
                ) :
                  (
                    <NavItem>
                    <Link to="/register">
                      <NavLink>
                        <RenderButton
                          title="Log Out"
                          // onClick={() => this.props.toggle("signUp")}
                        />
                      </NavLink>
                    </Link>
                  </NavItem>
                  )
              } */}
              {
                this.props.isAuthenticated ? (
                  <></>
                ) :
                  (
                    <NavItem>
                    <Link to="/login-register">
                      <NavLink>
                        <RenderButton
                          title="Getting Started"
                          // onClick={() => this.props.toggle("signUp")}
                        />
                      </NavLink>
                    </Link>
                  </NavItem>
                  )
              }
              <NavItem>
                <NavLink id="Popover2">
                  <Avatar
                    onClick={this.toggleUserCardPopover}
                    className="can-click"
                  />
                </NavLink>
                <Popover
                  placement="bottom-end"
                  isOpen={this.state.isOpenUserCardPopover}
                  toggle={this.toggleUserCardPopover}
                  target="Popover2"
                  className="p-0 border-0"
                  style={{ minWidth: 250 }}
                >
                  <PopoverBody className="p-0 border-0">
                    <UserCard
                      title="Fasil Minale"
                      subtitle="FasilMinale@gmail.com"
                      className="border-light"
                    >
                      <ListGroup flush>
                        <Link to={{ pathname: routes.profile }}>
                          <ListGroupItem
                            tag="button"
                            action
                            className="border-light"
                          >
                            <MdPersonPin /> Profile
                          </ListGroupItem>
                        </Link>

                        <ListGroupItem
                          tag="button"
                          action
                          className="border-light"
                        >
                          <MdInsertChart /> Stats
                        </ListGroupItem>
                        <ListGroupItem
                          tag="button"
                          action
                          className="border-light"
                        >
                          <MdMessage /> Messages
                        </ListGroupItem>
                      </ListGroup>
                    </UserCard>
                  </PopoverBody>
                </Popover>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className={bem.e("nav-right")}>
              <Popover
                trigger="legacy"
                placement="bottom"
                isOpen={this.state.isMobilePopoverOpen}
                toggle={this.toggleMobilePopover}
                target="MobilePopover"
                className="p-5 border"
              >
                <PopoverBody className="p-1">
                  <ListGroup flush>
                    <ListGroupItem
                      tag="button"
                      action
                      className="border-light"
                      onClick={() => this.props.toggle("signIn")}
                    >
                      <MdExitToApp className="mr-2" /> {"  "} SignIn
                    </ListGroupItem>
                    <ListGroupItem
                      tag="button"
                      action
                      className="border-light"
                      onClick={() => this.props.toggle("signUp")}
                    >
                      <MdGroupAdd className="mr-2" /> SignUp
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp className="mr-2" /> About Us
                    </ListGroupItem>
                  </ListGroup>
                </PopoverBody>
              </Popover>
              <NavItem id="MobilePopover">
                <NavLink>
                  <MdReorder size={20} />
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getAuthentication(state)
})

const mapDispatchToProps = dispatch => ({
  DeAuthenticateUser: () => dispatch(DeAuthenticateUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
