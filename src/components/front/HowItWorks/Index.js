import React, { Component } from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="col-md-5 p-5 side-box" style={{marginTop: 5 + 'px'}}>
        <div className="summery-box">
          <h5 className="pb-3">How it works</h5>
          <div className="how-to-work">
            <p className="d-flex">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/1660/1660090.svg"
                alt=""
              />
              Choose type of problem you have.
            </p>
          </div>
          <div className="how-to-work">
            <p className="d-flex">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/1530/1530297.svg"
                alt=""
              />
              Choose type of AC
            </p>
          </div>
          <div className="how-to-work">
            <p className="d-flex">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/860/860806.svg"
                alt=""
              />
              Book a time-slot.
            </p>
          </div>
          <div className="how-to-work">
            <p className="d-flex">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2593/2593342.svg"
                alt=""
              />
              Our technician will be at your door-step.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
