import React from 'react'
import { Link } from 'react-router-dom';
import SideBar from "../HowItWorks/Index";

function AddTimeAndDate(props) {
    return (
      <section>
      <div className="container">
        <div className="row  justify-content-center">
        <div className="col-sm-6 mt-5 ">
        <h5 className="pb-1">
                <b>AC Repair</b>
              </h5>
             <div className="tab-pane" role="tabpanel" id="step4">
                    <div className="add-address-box pb-4">
                      <h6>
                        <b>Select date and time</b>
                      </h6>

                      <div className="form-group col-8 mt-5">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="date"
                        />
                      </div>
                      <div className="form-group col-8">
                        <input
                          type="time"
                          className="form-control"
                          placeholder="Another input"
                        />
                      </div>
                      <div
                        style={{
                          height: 140 + "px",
                          padding: "111px 3px 0px 0",
                        }}
                      >
                        {/* <Link  
                          className="back-step float-left"
                          to='/ac-service/address'
                          >
                          Back
                        </Link> */}
                         <button
                              className="btn"
                              onClick={() => {
                                props.history.goBack();
                              }}
                              >
                              <strong>
                              Back
                              </strong>
                            </button>

                          <Link
                            className="next-step float-right next-button"
                            // to={`${props.match.url}/ratecard`}
                            to="/ac-repair/auth"
                          >
                            Next
                          </Link>
                      </div>
                    </div>
                  </div> 
                  </div> 
                  <SideBar />
        </div>
      </div>
    </section>
    )
}

export default AddTimeAndDate
