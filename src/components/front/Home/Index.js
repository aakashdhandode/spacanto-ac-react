import React, { Component } from "react";
import { Link } from "react-router-dom";


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() {
   
  }

  render(props) {
      
    return (
        <section>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm-6 p-5">
                    <Link to="/buy-ac" style={{color:'black'}}>
                        <div className="home-ac">
                            <img src="/images/achome2.png" alt="" className="img-fluid" />
                            <h3>Buy AC Units</h3>
                        </div>
                    </Link>
                </div>
    
                <div className="col-sm-6 p-5">
                    <Link to="/service" style={{color:'black'}}>
                        <div className="home-ac">
                            <img src="/images/homeac.png" className="img-fluid" alt="" />
                            <h3>Get AC Service Repair</h3>
                        </div>
                    </Link>
                </div>
    
            </div>
        </div>
    </section>
    );
  }
}
export default Index;
