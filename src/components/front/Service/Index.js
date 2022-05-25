
import React, { Component } from "react";
import SideBar from "../HowItWorks/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faAngleRight);

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <div className="container top-margin">
          <div className="row">
            <div className="col-md-7">
              <h5 className="pb-4">
                <b>Payment Method</b>
              </h5>
              <div className="ac-service-repair-box">
                <Link to="/ac-service/">
                  <h5>AC Service</h5>
                  <p>Full cleaning and diagnosis</p>
                  <FontAwesomeIcon icon="angle-right" />
                </Link>
              </div>
              <div className="ac-service-repair-box">
                <Link to="/ac-repair">
                  <h5>AC Repair</h5>
                  <p>AC not starting / less or no cooling / water leakage</p>
                  <FontAwesomeIcon icon="angle-right" />
                </Link>
              </div>
              <div className="ac-service-repair-box">
                <Link to="/install/">
                  <h5>Installation/Un-installation</h5>
                  <p>For all types of AC units</p>
                  <FontAwesomeIcon icon="angle-right" />
                </Link>
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </section>
    );
  }
}
export default Index;
