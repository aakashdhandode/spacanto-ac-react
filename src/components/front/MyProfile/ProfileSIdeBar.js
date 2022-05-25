import React from 'react'
import { Link } from 'react-router-dom'

function ProfileSIdeBar() {
    return (
        <div>
           <div className="col-md-2 mb-3 profile">
            <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  to="/profile"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  to='/orders'
                  
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  to='/mybooking'
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  My Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  to='/changepassword'
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  to='/myaddress'
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  My Address
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default ProfileSIdeBar
