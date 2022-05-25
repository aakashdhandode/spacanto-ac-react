import React from "react";
import ProfileSIdeBar from "./ProfileSIdeBar";


function MyBooking() {
  return (
    <div>
      <div className="container mt-5">
        <div className="top-page-links">
          <a href="">Home / My Account </a>
        </div>
        <div className="row">
          <ProfileSIdeBar />
          <div className="col-md-10 vertical-line pl-5">
          <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active col-md-8"
                id="myprofile"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h4>My Bookings</h4>
                <div className="mt-4 row booking_box">
                  <div className="col-md-4 pro-img">
                    <img
                      src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="booking_box_title">
                      <p className="col-8 ">AC Repair</p>
                      <span className="">Rs.333</span>
                    </div>
                    <table style={{width:100+ '%'}}>
                      <tr>
                        <td className="title-color">Type</td>
                        <td>WINDOW AC</td>
                      </tr>
                      <tr>
                        <td className="title-color">Issue</td>
                        <td>AC not starting</td>
                      </tr>
                      <tr>
                        <td className="title-color">Slot</td>
                        <td>23/11/2020</td>
                      </tr>
                      <tr>
                        <td className="title-color">Quantity</td>
                        <td>1</td>
                      </tr>
                    </table>
                    <div className="reschedule mt-2">
                      <a href="">Cancel the booking</a>
                      <a href="" className="float-right">
                        Reschedule the Slot
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 row booking_box">
                  <div className="col-md-4 pro-img">
                    <img
                      src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="booking_box_title">
                      <p className="col-8 ">AC Repair</p>
                      <span className="">Rs.333</span>
                    </div>
                    <table style={{width:100+ '%'}}>
                      <tr>
                        <td className="title-color">Type</td>
                        <td>WINDOW AC</td>
                      </tr>
                      <tr>
                        <td className="title-color">Issue</td>
                        <td>AC not starting</td>
                      </tr>
                      <tr>
                        <td className="title-color">Slot</td>
                        <td>23/11/2020</td>
                      </tr>
                      <tr>
                        <td className="title-color">Quantity</td>
                        <td>1</td>
                      </tr>
                    </table>
                    <div className="mt-2">
                      <p className="title-color">
                        Service done on <span>23/11/2020</span>{" "}
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
  );
}

export default MyBooking;
