import React from "react";
import ProfileSIdeBar from "./ProfileSIdeBar";

function MyAddress() {
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
                <h4>My Address</h4>
                <div className="row mt-5">
                  <div className="col-sm-4">
                    <div className="location-box">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <h5>Home</h5>
                      <p>
                        118, Qutub Vihar, New
                        <br /> Delhi 10007,
                        <br /> India
                      </p>
                      <a href="" style={{ float: "right" }} className="clr">
                        <b>Edit Location</b>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="location-box">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <h5>Home</h5>
                      <p>
                        118, Qutub Vihar, New
                        <br /> Delhi 10007,
                        <br /> India
                      </p>
                      <a href="" style={{ float: "right" }} className="clr">
                        <b>Edit Location</b>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="location-add">
                      <a
                        href=""
                        className="clr"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <h4> Add Location </h4>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-lg"
                    style={{ top: -51 + "px" }}
                    role="document"
                  >
                    <div className="modal-content">
                      <div
                        className="modal-header"
                        style={{ border: "none", padding: "10px 7px 0px 27p" }}
                      >
                        <h5 className="modal-title" id="exampleModalLabel">
                          <b>Enter Address</b>
                        </h5>
                        <button
                          type="button"
                          className="close"
                          style={{ color: "black" }}
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-5">
                              <form>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Example input"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Another input"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Another input"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Another input"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Another input"
                                  />
                                </div>

                                <div
                                  className="btn-toolbar tree-button"
                                  role="toolbar"
                                  aria-label="Toolbar with button groups"
                                >
                                  <div
                                    className="btn-group mr-2"
                                    role="group"
                                    aria-label="First group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                    >
                                      Home
                                    </button>
                                  </div>
                                  <div
                                    className="btn-group mr-2"
                                    role="group"
                                    aria-label="Second group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                    >
                                      Office
                                    </button>
                                  </div>
                                  <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Third group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                    >
                                      Other
                                    </button>
                                  </div>
                                </div>
                                <div
                                  className="text-center location-submit"
                                  role="group"
                                  aria-label=""
                                >
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    Add new location
                                  </button>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-7">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.74823051506!2d79.03443641487415!3d17.23099888817244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDEzJzUxLjYiTiA3OcKwMDInMTEuOSJF!5e0!3m2!1sen!2sin!4v1609765574406!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                frameborder="0"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default MyAddress;
