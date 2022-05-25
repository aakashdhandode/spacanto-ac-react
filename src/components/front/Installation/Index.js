import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../HowItWorks/Index";
import { Link } from "react-router-dom";
library.add(faPhone);

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <section>
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-sm-7">
                    <div className="wizard">
                        
                        <div className="tab-content mt-4" id="main_form">
                            <h5 className="pb-1"><b>Installation/Un-installation</b></h5>
                            
                             <div className="tab-pane active" role="tabpanel" id="step8">
                                <div className="rate form-height">
                                    <h5>Choose type of service</h5>
                                    <div className="row pt-3">
                                        <div className="col-sm-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Installation" />
                                                <label className="form-check-label">
                                                Installation
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Un-installation" />
                                                <label className="form-check-label">
                                                Un-installation
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="call pt-2">
                                        
                                    <Link  
                      className="next-step float-left "
                      to='/service/'
                      >
                      Back
                    </Link>

                      <Link
                        className="next-step float-right next-button"
                        // to={`${props.match.url}/ratecard`}
                        to="/install/typeof"
                      >
                        Next
                      </Link>
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
    );
  }
}
export default Index;
