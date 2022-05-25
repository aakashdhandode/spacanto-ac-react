import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../HowItWorks/Index";

library.add(faPhone);

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-sm-7">
              <div className="wizard">
                

                {/* <!-- Choose type of AC unit  (AC Service-2) -1step --> */}
                <div className="tab-content mt-4" id="main_form">
                  <h5 className="pb-1">
                    <b>AC Repair</b>
                  </h5>
                  <div className="tab-pane active" role="tabpanel" id="step1">
                    <div className="rate">
                      <h5>Choose type of AC unit</h5>
                      <div className="seerate colr">
                        <a href="" data-toggle="modal" data-target="#ratecard">
                          See Rate Card
                        </a>
                      </div>
                      <div className="row pt-3">
                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="WINDOW AC"
                            />
                            <label className="form-check-label">
                              Window Ac
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="PACKAGED AC"
                            />
                            <label className="form-check-label">
                              Packaged Ac
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Vrv Ac Units"
                            />
                            <label className="form-check-label">
                              Vrv Ac Units
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Ahus-dx Odus"
                            />
                            <label className="form-check-label">
                              Ahus-dx Odus
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Chilled Water Cassette Units"
                            />
                            <label className="form-check-label">
                              Chilled Water Cassette Units
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Chilled Water Fcus"
                            />
                            <label className="form-check-label">
                              Chilled Water Fcus
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Chilled Water Ahus"
                            />
                            <label className="form-check-label">
                              Chilled Water Ahus
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Portable Ac"
                            />
                            <label className="form-check-label">
                              Portable Ac
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="call pt-3">
                        <a href="">
                          <FontAwesomeIcon icon="phone" /> Call Service Engineer
                          for help
                        </a>
                        <div className="pt-2">
                          <a href="/service-repair">
                            <b>Back</b>
                          </a>
                          <button className="next-step float-right next-button">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--Choose type>> See Rate Card --> */}
                  <div
                    className="modal fade bd-example-modal-lg show-rate-card"
                    id="ratecard"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            <b>Rate Card</b>
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body show-rate-card">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                              <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>Rs.345</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- //See Rate Card -->
                            <!--//end  Choose type of AC unit  (AC Service-2) -1step --> */}

                  {/* <!-- step 1.1 Choose issues --> */}
                  {/* <div className="tab-pane" role="tabpanel" id="step8">
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
                            <label className="form-check-label">
                              Water leakage
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Noise issue"
                            />
                            <label className="form-check-label">
                              Noise issue
                            </label>
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
                          <a href="/ac-repair">
                            <b>Back</b>
                          </a>
                          <button className="next-step float-right next-button">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <!--// Choose issues --> */}

                  {/* <!-- Safety Precautions Agreement step 2(ac-service-4) --> */}
                  <div className="tab-pane" role="tabpanel" id="step2">
                    <div className="rate">
                      <h5>Safety Precautions Agreement</h5>
                      <div className="over">
                        This text is really long and the height of its container
                        is only 100 pixels. Therefore, a scrollbar is added to
                        help the reader to scroll the content. Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl
                        ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio
                        dignissim qui blandit praesent luptatum zzril delenit
                        augue duis dolore te feugait nulla facilisi. Nam liber
                        tempor cum soluta nobis eleifend option congue nihil
                        imperdiet doming id quod mazim placerat facer possim
                        assum. Typi non habent claritatem insitam; est usus
                        legentis in iis qui facit eorum claritatem.
                      </div>
                      <div className="form-check ml-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label className="form-check-label">
                          I agree to all the terms of agreement
                        </label>
                      </div>
                      <div className="form-check ml-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label className="form-check-label">
                          I agree to diagnosis charges
                        </label>
                      </div>
                      <div className="" style={{ margin: "-13px 0 11px 0" }}>
                        <button className="next-step float-right next-button">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!--// end  Safety Precautions Agreement step 2(ac-service-4) --> */}

                  {/* <!-- Add Address form step-3 (ac-service-5) --> */}
                  <div className="tab-pane" role="tabpanel" id="step3">
                    <div className="add-address-box pb-4">
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
                      <div className="row mt-4">
                        <div className="col-md-6 colr">
                          <p>Find location on Google Maps</p>
                        </div>
                        <div className="col-md-6">
                          <button className="next-step float-right next-button">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- //end Add Address form  step-3(ac-service-5) --> */}

                  {/* <!-- Select date and time step-4 (ac-service-6) --> */}
                  <div className="tab-pane" role="tabpanel" id="step4">
                    <div className="add-address-box pb-4">
                      <h6>
                        <b>Select date and time</b>
                      </h6>

                      <div className="form-group col-6 mt-5">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="date"
                        />
                      </div>
                      <div className="form-group col-6">
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
                        <button className="next-step float-right next-button">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!--// end Select date and time step-4 (ac-service-6) --> */}

                  {/* <!-- Verify your OTP step-5 ac-service-3 --> */}
                  <div className="tab-pane" role="tabpanel" id="step5">
                    <div
                      className="add-address-box pb-4"
                      style={{ width: 360 + "px" }}
                    >
                      <h6>
                        <b>Verify your OTP</b>
                      </h6>
                      <p>
                        OTP sent to{" "}
                        <a href="" style={{ color: "black" }}>
                          {" "}
                          +91 9897979977
                        </a>
                      </p>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group mt-5 ">
                        <button className="next-step get-otp next-button">
                          Get OTP
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end Verify your OTP step-5 ac-service-3 --> */}

                  {/* <!-- Verify your OTP step-6 (ac-service-8) --> */}
                  <div className="tab-pane" role="tabpanel" id="step6">
                    <div
                      className="add-address-box pb-4"
                      style={{ width: 360 + "px" }}
                    >
                      <h6>
                        <b>Verify your OTP</b>
                      </h6>
                      <p>
                        OTP sent to{" "}
                        <a href="" style={{ color: "black" }}>
                          {" "}
                          +91 9897979977
                        </a>
                      </p>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="OTP"
                        />
                      </div>
                      <div className="text-center">
                        0<span id="timer"></span>
                      </div>
                      <div className="form-group mt-2 ">
                        <button className="next-step get-otp next-button">
                          Verify
                        </button>
                      </div>
                      <div className="text-center">
                        <p>
                          Didn’t receive OTP?{" "}
                          <a href="" className="colr">
                            {" "}
                            Resend
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- //end Verify your OTP step-6 (ac-service-8) -->
    
                            <!-- Payment Method step-7 --> */}
                  <div className="tab-pane" role="tabpanel" id="step7">
                    <div className="add-address-box">
                      <div className="payment-box">
                        <h5>
                          <b>Payment Method</b>
                        </h5>
                        <div
                          className="text-right"
                          style={{ marginTop: -34 + "px" }}
                        >
                          <p>
                            Payable account
                            <br />
                            <span>
                              <b>Rs.550</b>
                            </span>
                          </p>
                        </div>
                        <div className="container">
                          <div
                            className="panel-group"
                            id="accordion"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingOne"
                              >
                                <h4 className="panel-title">
                                  <a
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#creditcard"
                                    aria-expanded="true"
                                    aria-controls="creditcard"
                                  >
                                    Credit Card
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="creditcard"
                                className="panel-collapse collapse in"
                                role="tabpanel"
                                aria-labelledby="headingOne"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingTwo"
                              >
                                <h4 className="panel-title">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#debitcard"
                                    aria-expanded="false"
                                    aria-controls="debitcard"
                                  >
                                    Debit Card
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="debitcard"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingTwo"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingtree"
                              >
                                <h4 className="panel-title">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#EMI"
                                    aria-expanded="false"
                                    aria-controls="EMI"
                                  >
                                    EMI
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="EMI"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingTree"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingfour"
                              >
                                <h4 className="panel-title">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#upi"
                                    aria-expanded="false"
                                    aria-controls="upi"
                                  >
                                    UPI ID
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="upi"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingfour"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingfive"
                              >
                                <h4 className="panel-title">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#Netbanking"
                                    aria-expanded="false"
                                    aria-controls="Netbanking"
                                  >
                                    Netbanking
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="Netbanking"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingfive"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingsix"
                              >
                                <h4 className="panel-title">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#cash"
                                    aria-expanded="false"
                                    aria-controls="cash"
                                  >
                                    Pay after Service
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="cash"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingsix"
                              >
                                <div className="panel-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent nisl lorem, dictum
                                    id pellentesque at, vestibulum ut arcu.
                                    Curabitur erat libero, egestas eu tincidunt
                                    ac, rutrum ac justo. Vivamus condimentum
                                    laoreet lectus, blandit posuere tortor
                                    aliquam vitae. Curabitur molestie eros.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
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
}
export default Index;
