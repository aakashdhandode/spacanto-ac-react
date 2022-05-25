
function Index() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
            <h5>Account</h5>
            <li>
              <a href="">My Orders</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Return Policy</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </div>
          <div className="col-sm-3">
            <h5>Company</h5>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </div>
          <div className="col-sm-3">
            <div className="mt-4">
              <div className="footer-icon">
                <p className="d-flex">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3076/3076636.svg"
                    alt=""
                  />
                  100% guarantee for product
                </p>
              </div>
              <div className="footer-icon">
                <p className="d-flex">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3163/3163274.svg"
                    alt=""
                  />
                  Easy return policy
                </p>
              </div>
              <div className="footer-icon">
                <p className="d-flex">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/411/411763.svg"
                    alt=""
                  />
                  Get free delivery for every order above Rs. xxx
                </p>
              </div>
            </div>
          </div>
          <div className="text-center col-12" style={{marginTop : 106 + 'px'}}>
            <p>
              Copyright © 2020. All rights reserved. | Designed & Developed by{" "}
              <a href="https://odms.in/" target="_blank">
                ODMS PVT LTD
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
