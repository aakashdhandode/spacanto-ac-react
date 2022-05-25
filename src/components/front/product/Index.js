import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

function Index() {
  return (
    <>
      <section>
        <div className="container">
          <div className="top-page-links">
            <a href="">Home/ AC Units/ Product Page </a>
          </div>
          <div className="row">
            <div className="col-sm-6 productpage">
              <img
                src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="product-page">
                <h3>
                  Voltas Adjustable <br />
                  Inverter Split Ac 185v Ads(R32)
                </h3>
                <div className="productpage mt-3">
                  <table>
                    <tr>
                      <td className="title-color">Type</td>
                      <td>Invertor AC Unit</td>
                    </tr>
                    <tr>
                      <td className="title-color">Tonnage</td>
                      <td>Type</td>
                    </tr>
                    <tr>
                      <td className="title-color">Star Rating</td>
                      <td>5 Stars</td>
                    </tr>
                    <tr>
                      <td className="title-color">Features</td>
                      <td>Remote Control, Auto Clean</td>
                    </tr>
                    <tr>
                      <td className="title-color">Warranty</td>
                      <td>5 years</td>
                    </tr>
                  </table>
                  <div className="rating-review">
                    <tr>
                      <td>
                        <span>
                          4.5<FontAwesomeIcon icon="star" />
                        </span>
                      </td>
                      <td> 35 Ratings & 12 Reviews</td>
                      <h3>Rs.63,333</h3>
                    </tr>
                  </div>
                  <div>
                    <form>
                      <div className="form-group row pincode mt-4">
                        <label className="col-sm-2 col-form-label">Quantity</label>
                        <div className="form-group col-md-3">
                          <select id="inputState" className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Pincode</label>
                        <div className="col-sm-6 pincode">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="buy-addcart">
                        <div className="row">
                          <div className="col-sm-4 col-lg-4 d-flex">
                            <a
                              href="{{('cart-page')}}"
                              className="btn btn-block buynow d-flex flex-sm-column align-items-center"
                            >
                              <span>Buy Now</span>
                            </a>
                          </div>
                          <div className="col-sm-4 col-lg-4  d-flex ">
                            <a
                              href="#"
                              className="btn btn-block d-flex addcart flex-sm-column align-items-center justify-content-left justify-content-sm-center"
                            >
                              <span>Add to Cart</span>
                            </a>
                          </div>
                          <div className="col-sm-4 col-lg-4  offset-sm-4 offset-lg-0  d-flex align-items-center">
                            <a href="{{('compare')}}" className="addcompare">
                              <span>Add to Compare</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <p>
                  <b>Full Specifications</b>
                </p>
              </h4>

              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Product Specifications
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body coll-table">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Tonnage</td>
                            <td>1 Ton</td>
                          </tr>
                          <tr>
                            <td>Full Load Capacity [W]</td>
                            <td>5200</td>
                          </tr>
                          <tr>
                            <td>Half Load Capacity [W]</td>
                            <td>2600</td>
                          </tr>
                          <tr>
                            <td>Compressor Type</td>
                            <td>High EER Twin Rotary</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Porformance
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Operations
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingfour">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        Dimensions
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsefour"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingfour"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingfive">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Unit Weight
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsefive"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingfive"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="rating-title">
            <h4 style={{textAlign:'left'}}>
              <p>
                <b> Ratings and reviews</b>
              </p>
              <span style={{float:'right', fontSize: 20 + 'px'}}>
                <a href="" className="colr">
                  See All
                </a>
              </span>
            </h4>
          </div>
          <div className="total-review mt-4">
            <tr>
              <td>
                <span>
                  4.5<FontAwesomeIcon icon="star" />
                </span>
              </td>
              <td> 35 Ratings & 12 Reviews</td>
            </tr>
            <br />
            <button className="write-review-button">Write your review</button>
          </div>

          <div className="rating-and-story">
            <h4 className="rating4">4 Rating </h4>
            <div className="starrating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <div className="story">
                <h4>Good Product at this price.</h4>
                <h6>
                  Good Product at this price.
                  <br /> I am writing a review of this product after two months
                  of use.. I musf say its overall Good Product. Good Service of
                  Tata CliQ team.
                  <br /> Timely delivery and Installation. Happy to Buy this
                  Budget Product.
                </h6>
                <p>Gajendra kakde</p>
                <hr />
              </div>
            </div>
            <h4 className="rating4">4 Rating </h4>
            <div className="starrating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <div className="story">
                <h4>Good Product at this price.</h4>
                <h6>
                  Good Product at this price.
                  <br /> I am writing a review of this product after two months
                  of use.. I musf say its overall Good Product. Good Service of
                  Tata CliQ team.
                  <br /> Timely delivery and Installation. Happy to Buy this
                  Budget Product.
                </h6>
                <p>Gajendra kakde</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
