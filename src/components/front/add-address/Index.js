import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faShieldAlt);

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  };
  }

  componentDidMount() {
  
  }

  render() {
    return (
        <section>
        <div className="container" style={{marginTop: 53 + 'px'}}>
            <div className="row">
                <div className='col-md-7'>
                    <h5 className="pb-4"><b>Checkout</b></h5>
                    <div className="add-address-box">
                        <h6><b>Add Address</b></h6>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="pin" placeholder="Enter Your Pin Code*" />
                                </div>
                                <div className="form-group col-md-3">
                                    <input type="text" className="form-control" name="fname" placeholder="First Name*" />
                                </div>
                                <div className="form-group col-md-3">
                                    <input type="text" className="form-control" name="lname" placeholder="Last Name*" />
                                </div>
                            </div>
    
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="" placeholder="City/District*" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="" placeholder="State*" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" id="" rows="3" placeholder="Address*"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="" placeholder="Landmark" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Phone Number*" />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6 colr">
                                    <p>Find location on Google Maps</p>
                                </div>
                                <div className="col-md-6 save">
                                <a href="/payment">Save and Continue</a> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 p-5" style={{marginTop: 5 + 'px'}}>
                    <div className="summery-box">
                        <h5>Order Summary</h5>
                        <div className="summery-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Bag Total</td>
                                        <td className="right-shift">Rs.63,333</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge</td>
                                        <td className="right-shift">FREE</td>
                                    </tr>
                                    <tr>
                                        <td>Bag subtotal</td>
                                        <td className="right-shift">Rs.63,333</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td className="right-shift">- Rs.333</td>
                                    </tr>
    
                                </thead>
                            </table>
                        </div>
                        <div className="bottum-border"></div>
                        <div className="checkout" style={{marginTop: 25 + 'px', marginBottom: 22+ 'px' }}>
                            <h4>Total Payable
                                <span style={{float:'right'}}>Rs.63,000</span>
                            </h4>
                        </div>
                    </div>
                    <div className="secure-pay p-4">
                        <p className="d-flex"><FontAwesomeIcon icon="shield-alt" size={'3x'} />Safe and secure payments. Easy returns. 100%
                            Authentic products.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
export default Index;
