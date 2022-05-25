import React from "react";
import ProfileSIdeBar from "./ProfileSIdeBar";

function Orders() {
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
                
                <h4>My Orders</h4>
                <div className="  row booking_box">
                  <div className="col-md-12 pro-img">
                      
                    <img
                      src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-11 mt-3">
                    <div className="booking_box_title">
                      <p className="col-8 ">
                        Voltas Adjustable
                        <br /> Inverter Split Ac 185v Ads(R32)
                      </p>
                      <span className="">Rs.63,333</span>
                    </div>

                    <table style={{ width: 100 + "%" }}>
                      <tr>
                        <td className="title-color">Type</td>
                        <td>Invertor AC Unit</td>
                      </tr>
                      <tr>
                        <td className="title-color">Tonnage</td>
                        <td>Tonnage</td>
                      </tr>
                      <tr>
                        <td className="title-color">Quantity</td>
                        <td>1</td>
                      </tr>
                    </table>
                    <div
                      className="reschedule title-color"
                      style={{ float: "right", margin: "-19px 0 0 0" }}
                    >
                      <p>Delivered on 23/11/2020</p>
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

export default Orders;
