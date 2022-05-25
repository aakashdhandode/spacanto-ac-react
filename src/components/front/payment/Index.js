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
        <div className="container" style={{marginTop: 30 + 'px'}}>
                <div className="row">
                    <div className='col-md-7'>
                        <h5 className="pb-4"><b>Payment Method</b></h5>
                        <div className="add-address-box">
                            <div className="payment-box">
                                <div className="container">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a role="button" data-toggle="collapse" data-parent="#accordion"
                                                        href="#creditcard" aria-expanded="true" aria-controls="creditcard">
                                                        Credit Card
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="creditcard" className="panel-collapse collapse in" role="tabpanel"
                                                aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse"
                                                        data-parent="#accordion" href="#debitcard" aria-expanded="false"
                                                        aria-controls="debitcard">
                                                        Debit Card
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="debitcard" className="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingtree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse"
                                                        data-parent="#accordion" href="#EMI" aria-expanded="false"
                                                        aria-controls="EMI">
                                                        EMI
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="EMI" className="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingTree">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingfour">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse"
                                                        data-parent="#accordion" href="#upi" aria-expanded="false"
                                                        aria-controls="upi">
                                                        UPI ID
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="upi" className="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingfour">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingfive">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse"
                                                        data-parent="#accordion" href="#Netbanking" aria-expanded="false"
                                                        aria-controls="Netbanking">
                                                        Netbanking
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Netbanking" className="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingfive">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingsix">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse"
                                                        data-parent="#accordion" href="#cash" aria-expanded="false"
                                                        aria-controls="cash">
                                                        Cash on Delivery
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="cash" className="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingsix">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
                                                        lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat
                                                        libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum
                                                        laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie
                                                        eros. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
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
