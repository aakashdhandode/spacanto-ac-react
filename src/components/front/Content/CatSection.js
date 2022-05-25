
import React, { Component  } from "react";
import { Link } from "react-router-dom";

class CatSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { category: this.props.name, products: this.props.products };
  }

  render() {
    const category = this.state.category;
    const products = this.state.products;
    return (
      <div className="container mt-5">
        <div className="index-product-title">
          <h5>{category}</h5>
          <Link to="/category">
            <Link >
              <p>See More</p>
            </Link>
          </Link>
        </div>
        <div className="row mt-3">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="clients-box">
                <Link to="/product">
                  <a>
                    <div>
                      <div className="product-card">
                        <img src={product.img} className="img-fluid" />
                      </div>
                      <div className="product-details">
                        <p>{product.name}</p>
                        <table>
                          <tbody>
                            <tr>
                              <td className="title-color">Tonnage</td>
                              <td className="text-right">1 TON</td>
                            </tr>
                            <tr>
                              <td className="title-color">Star Rating</td>
                              <td className="text-right">5 Stars</td>
                            </tr>
                            <tr>
                              <td className="title-color">MRP</td>
                              <td className="text-right">Rs.63,333</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CatSection;
