import React from 'react'
import { Link } from 'react-router-dom';
import SideBar from "../HowItWorks/Index";

function OtpSend(props) {
  console.log(props)
    return (
       
            <section>
      <div className="container">
        <div className="row  justify-content-center">
        <div className="col-sm-6 mt-5 ">
        <h5 className="pb-1">
                <b>AC Service</b>
              </h5>
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
                        <button
                         className="next-step get-otp next-button"
                         onClick={() => {
                          props.history.push("/ac-service/payment");
                        }}
                         >
                          Get OTP
                        </button>
                      </div>
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

                         
        </div>
        <SideBar />
        </div>
        </div>
     
    </section>
    )
}

export default OtpSend
