import React from 'react'
import SideBar from "../HowItWorks/Index";

function PaymentMethod() {
    return (
      <section>
      <div className="container">
        <div className="row  justify-content-center">
        <div className="col-sm-6 mt-5 ">
        <h5 className="pb-1">
                <b>AC Repair</b>
              </h5>
            <div className="tab-pane" role="tabpanel" id="step7">
                    <div className="add-address-box">
                      <div className="payment-box">
                        <h5>
                          <b>Payment Method</b>
                        </h5>
                        <div
                          className="text-right"
                          style={{ marginTop: 34 + "px" }}
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
           
    )
}

export default PaymentMethod
