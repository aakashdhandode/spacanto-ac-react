import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faAngleUp);

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: this.props.products };
  }

  render() {
    const products = this.state.products;
    return (
      <div className="col-md-3">
        <div className="spacanto-sidebar">
          <div className="colr text-right">
            <p>Reset</p>
          </div>
          <Card className="panel">
            <Accordion>
              <Accordion.Toggle
                as={Card.Header}
                className="panel-heading"
                variant="tab"
                style={{maxHeight:50 + 'px'}}
                eventKey="0"
              >
                <div className="row">
                  <h5 className="panel-title" style={{ width: 90 + "%" }}>
                    <a href="#type">Type</a>
                  </h5>
                  <div className="float-right">
                    <FontAwesomeIcon icon="angle-down" size={"2x"} />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0" className="panel-body">
                <div style={{ paddingLeft: 15 + "px" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Invertor AC Units"
                    />
                    <label className="form-check-label">
                      Invertor AC Units
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Non Invertor AC Units"
                    />
                    <label className="form-check-label">
                      Non Invertor AC Units
                    </label>
                  </div>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        </div>
      </div>
    );
  }
}
export default SideBar;
