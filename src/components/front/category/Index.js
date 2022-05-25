import {Link} from "react-router-dom";
import SideBar from "./SideBar";

function Index() {
  const products = [
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
  return (
    <section>
      <div className="container mt-4">
        <div className="row">
          <p>Home/ AC Units</p>
        </div>
        <div className="mt-4">
          <div className="row">
            <SideBar />

            <div className="col-sm-9" style={{ borderLeft: "1px solid gray" }}>
              <div className="title">
                <p style={{ textAlign: "left" }}>
                  23 Results found
                  <span style={{ float: "right" }}>
                    Sort by:
                    <span>
                      <select>
                        <option>Newest</option>
                        <option value="3">Three</option>
                        <option value="1">One</option>
                        <option value="0">Zero</option>
                        <option value="2">Two</option>
                        <option value="8">Eight</option>
                      </select>
                    </span>
                  </span>
                </p>
              </div>

              <div className="row mt-3">
                {products.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <div className="clients-box">
                      <Link href="/product">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
