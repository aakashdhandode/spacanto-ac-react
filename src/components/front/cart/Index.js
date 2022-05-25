import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faShieldAlt);

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: this.props.products };
  }

  componentDidMount() {
    const prdts = [
      {
        id: 1,
        name: "1ABC",
        img:
          "https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg",
      },
      {
        id: 2,
        name: "2ABC",
        img:
          "https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg",
      },
      {
        id: 3,
        name: "3ABC",
        img:
          "https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg",
      },
      {
        id: 4,
        name: "3ABC",
        img:
          "https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg",
      },
    ];
    this.setState({ products: prdts });
  }

  render() {
    const products = this.state.products;
    return (
      <section>
        <div className="container" style={{marginTop: 30 + 'px'}}>
          <div className="row">
            <div className="col-md-7">
              <div className="mycart-page">
                <div className="cart-titles">
                  <h5>My Cart</h5>
                  <p>1 Item</p>
                </div>
                <div className="mt-4">
                  <div className="order-box">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="product-details">
                          <div className="myorder-title-price d-flex">
                            <h4>
                              Voltas Adjustable <br />
                              Inverter Split Ac 185v Ads(R32)
                            </h4>
                            <span>Rs.63,333</span>
                          </div>
                          <table>
                            <tr>
                              <td>Type</td>
                              <td>Invertor AC Unit</td>
                            </tr>
                            <tr>
                              <td>Tonnage</td>
                              <td>1 Ton</td>
                            </tr>
                            <tr>
                              <td>Quantity</td>
                              <td>
                                <select style={{width: 65+ 'px',paddingLeft: 13 + 'px'}}>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </td>
                            </tr>
                          </table>
                          <div className="cart-remove">
                            <a href="#">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ps-5">
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
                        <td className="right-shift colr">- Rs.333</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="" className="colr">
                            Apply Discount
                          </a>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="checkout">
                  <h4>
                    Total
                    <br />
                    <span>Rs.63,000</span>
                  </h4>
                  <a href="/add-address">
                    <button>Checkout</button>
                  </a>
                </div>
              </div>
              <div className="secure-pay p-4">
                <p className="d-flex">
                <FontAwesomeIcon icon="shield-alt" size={'5x'} />
                  Safe and secure payments. Easy returns. 100% Authentic
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Index;
