import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../HowItWorks/Index";
import { Link } from 'react-router-dom';


function AcService1() {
  return (
    <section>
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-sm-7">
          <div className="wizard">
            <div className="wizard-inner">
            
            </div>

            {/* <!-- Choose type of AC unit  (AC Service-2) -1step --> */}
            <div className="tab-content mt-4" id="main_form">
              <h5 className="pb-1">
                <b>AC Service</b>
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
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label">
    WINDOW AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="SPLIT AC"
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
    SPLIT AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Cassette AC "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Cassette AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Ductable AC "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Ductable AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Tower AC "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Tower AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Packaged  AC "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Packaged  AC
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Chilled Water Cassette Units "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Chilled Water Cassette Units
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    value="Chilled Water FCUS "
    // onChange={(e) => this.updateCheckbox(e.target)}
  />
  <label className="form-check-label" required>
  Chilled Water FCUS
  </label>
</div>

</div>
                  </div>

                  <div className="call pt-2">
                    <a href="">
                      <FontAwesomeIcon icon="phone" />
                      Call Service Engineer for help
                    </a>
                    <div className="pt-3 pb-2">
                     
                        {/* <button
                          className="btn"
                          onClick={() => {
                            this.props.history.goBack();
                          }}
                        >
                          Back
                        </button> */}
                     <Link  
                      className="next-step float-left "
                      to='/service/'
                      >
                      Back
                    </Link>

                      <Link
                        className="next-step float-right next-button"
                        // to={`${props.match.url}/ratecard`}
                        to="/ac-service/ratecard"
                      >
                        Next
                      </Link>
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
  )
}

export default AcService1
