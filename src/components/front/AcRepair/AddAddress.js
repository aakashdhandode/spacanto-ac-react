import React from 'react'
import { Link } from 'react-router-dom';
import SideBar from "../HowItWorks/Index";

function AddAddress(props) {
    return (
      <section>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-sm-7 mt-5 ">
          <h5 className="pb-1">
                <b>AC Repair</b>
              </h5>
            <div className="tab-pane " role="tabpanel" id="step3">
                    <div className="add-address-box ">
                      <h6>
                        <b>Add Address</b>
                      </h6>

                      <div className="form-row pt-3">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="pin"
                            placeholder="Enter Your Pin Code*"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            placeholder="First Name*"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            name="lname"
                            placeholder="Last Name*"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id=""
                              placeholder="City/District*"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id=""
                              placeholder="State*"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id=""
                              rows="3"
                              placeholder="Address*"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Landmark"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*"
                          />
                        </div>
                      </div>
                      <div className="row mt-1 mb-3">
                        <div className="col-md-6 colr">
                          <p>Find location on Google Maps</p>
                        </div>
                        </div>
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
                        {/* <Link  
                          className="next-step float-left "
                          to='/service/spa'
                          >
                          Back
                        </Link> */}

                          <Link
                            className="next-step float-right next-button"
                            // to={`${props.match.url}/ratecard`}
                            to="/ac-repair/AddTimeAndDateRepa"
                          >
                            Next
                          </Link>
                        
                    </div>
                  </div>
                  </div>
          <SideBar />
        </div>
      </div>
    </section>
    )
}

export default AddAddress
