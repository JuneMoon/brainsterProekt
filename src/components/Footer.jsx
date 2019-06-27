/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
          
              <div className="col px-0 shape-container d-flex align-items-center">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brainlogo.png")}
                      style={{ width: "200px" }}
                    /> */}
                    <h3 className="h1 text-darker">
                      FUTURE PROOF YOUR ORGANIZATION 
                    </h3>
                    <p className="lead text-dark">Find out how to unlock progress in your business. Understand your current state, 
                      identify opportunity areas and prepate to take charge of your organization's future.</p>
                    <div className="btn-wrapper mt-5">
                      
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="warning"
                        href="https://brainsterquiz.typeform.com/to/kC2I9E"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--text">
                          Take the Assessment
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            
            <hr />
            <Row className=" justify-content-md-between">
              <Col lg="4" >
                <Nav className="nav-footer justify-content-start">
                  <NavItem>
                    <NavLink
                      href="https://brainster.co/contact"
                      target="_blank"
                    >
                      Контакт
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/pg/brainster.co/photos/"
                      target="_blank"
                    >
                      Галерија
                    </NavLink>
                  </NavItem>
                </Nav>  
              </Col>
              <Col lg="4" >
                <div>
                  <NavbarBrand className="justify-content-center" href="#" >
                    <img
                      alt="..."
                      src={require("assets/img/brainlogo.png")}
                    />
                  </NavbarBrand>
                  </div>
              </Col>
               <Col  lg="4">
                <div className="justify-content-end  btn-wrapper">
                  <Button
                    className=" btn-neutral btn-icon-only btn-round ml-1"
                    color="primary"
                    href="https://www.linkedin.com/company/brainster-co"
                    id="tooltip568564532"
                    size="lg"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip568564532">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className=" btn-neutral btn-icon-only btn-round"
                    color="twitter"
                    href="https://twitter.com/BrainsterCo"
                    id="tooltip126536702"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip126536702">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className=" btn-neutral btn-icon-only btn-round ml-1"
                    color="facebook"
                    href="https://www.facebook.com/brainster.co"
                    id="tooltip383967593"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip383967593">
                    Like us
                  </UncontrolledTooltip>
                </div>  
                  
              </Col>
            
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
