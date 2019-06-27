import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">
                  <h6 className="h6 text-white">
                      Изработено од студенти на академијата за програмирање на <span className="text-warning" href="https://www.brainster.io/">Brainster</span> 
                    </h6>
                  </Col>
                </Row>
              </div>
            </Container>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brainlogo.png")}
                      style={{ width: "200px" }}
                    /> */}
                    <h1 className="h1 text-white">
                      FUTURE PROOF YOUR ORGANIZATION 
                    </h1>
                    <p className="lead text-white">Find out how to unlock progress in your business. Understand your current state, 
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
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
