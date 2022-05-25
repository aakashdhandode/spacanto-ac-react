import React, { Component } from "react";
import ProfileSIdeBar from "./ProfileSIdeBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faShieldAlt);

function MyProfile() {
  return (
    <div>
      <div className="container mt-5">
        <div className="top-page-links">
          <a href="">Home / My Account </a>
        </div>
        <div className="row">
          <ProfileSIdeBar />
          <div className="col-md-8 vertical-line pl-5">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active col-md-4"
                id="myprofile"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h4>My Profile</h4>
                <form className="mt-4">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>

                  <button type="submit" className="btn button-color mt-4">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
