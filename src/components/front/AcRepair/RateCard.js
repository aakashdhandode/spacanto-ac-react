import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../HowItWorks/Index";
import { Link } from "react-router-dom";

function RateCard(props) {
  return (
    <section>
        <div className="container">
          <div className="row  justify-content-center mt-2">
            <div className="col-sm-7 rate ">
              <h5 className="pb-1">
                <b>AC Repair</b>
              </h5>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  <b>Rate Card</b>
                </h5>
              </div>
              <div className="modal-body show-rate-card ">
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

                <button
                              className="btn"
                              onClick={() => {
                                props.history.goBack();
                              }}
                              ><strong>
                              Back
                              </strong>
                            </button>

                {/* <Link
                  className="next-step float-left "
                  to="/ac-service/"
                >
                  Back
                </Link> */}

                <Link
                  className="next-step float-right next-button"
                  to="/ac-repair/issue"
                >
                  Next
                </Link>
                </div>
             
            </div>

            <SideBar />
          </div>
        </div>
      </section>
  )
}

export default RateCard
