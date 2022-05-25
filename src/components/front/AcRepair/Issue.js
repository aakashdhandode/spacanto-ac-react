import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../HowItWorks/Index";

function Issue(props) {
  return (
    <section>
      <div className="container">
        <div className="row  justify-content-center mt-2">
          <div className="col-sm-7 rate ">
          <h5 className="pb-1">
                <b>AC Repair</b>
              </h5>
            <div className="tab-pane" role="tabpanel" id="step8">
              <div className="rate">
                <h5>Choose issues</h5>

                <div className="row pt-3">
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="AC not starting"
                      />
                      <label className="form-check-label">
                        AC not starting
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Less or no cooling"
                      />
                      <label className="form-check-label">
                        Less or no cooling
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Water leakage"
                      />
                      <label className="form-check-label">Water leakage</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Noise issue"
                      />
                      <label className="form-check-label">Noise issue</label>
                    </div>
                  </div>
                </div>
                <div className="issue-p">
                  <p>Repair cost shall be provided after inspection</p>
                </div>
                <div className="call pt-2">
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>Call
                    Service Engineer for help
                  </a>
                  <div className="pt-2">
                  <button
                              className="btn"
                              onClick={() => {
                                props.history.goBack();
                              }}
                              ><strong>
                              Back
                              </strong>
                            </button>
                            <Link
                  className="next-step float-right next-button"
                  to="/ac-repair/saprepair"
                >
                  Next
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default Issue;
