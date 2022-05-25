import React from "react";
import ProfileSIdeBar from "./ProfileSIdeBar";

function ChangePassword() {
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
                <h4>Change Password</h4>
                <form className="mt-5">
                  <div className="form-group">
                    <label>Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name=""
                      placeholder="****************"
                    />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name=""
                      placeholder="New Password"
                    />
                  </div>
                  <button type="submit" className="btn button-color mt-4">
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
