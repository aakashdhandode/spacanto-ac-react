import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../HowItWorks/Index";

function SPA(props) {
  return (
    <section>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-sm-7">
          <h5 className="pb-1 mt-4">
                <b>AC Repair</b>
              </h5>
            <div className="tab-pane " role="tabpanel" id="step2">
              <div className="mt-2 pb-5 rate">
                <h5>Safety Precautions Agreement</h5>
                <div className="over p-2">
                  This text is really long and the height of its container is
                  only 100 pixels. Therefore, a scrollbar is added to help the
                  reader to scroll the content. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Typi non habent
                  claritatem insitam; est usus legentis in iis qui facit eorum
                  claritatem.
                </div>
                <div className="form-check ml-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="SPLIT AC"
                  />
                  <label className="form-check-label mb-3 pb-2">
                    I agree to all the terms of agreement
                  </label>
                </div>
                <button
                              className="btn"
                              onClick={() => {
                                props.history.goBack();
                              }}
                              ><strong>
                              Back
                              </strong>
                            </button>
                {/* <Link
                  className="next-step float-left"
                  to="/ac-service/ratecard"
                >
                  Back
                </Link> */}
                <Link
                  className="next-step float-right next-button "
                  to="/ac-repaire/addressrep"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default SPA;
