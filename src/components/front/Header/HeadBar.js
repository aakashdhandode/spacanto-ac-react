import { Link } from 'react-router-dom'

function HeadBar() {
    return (
        <div className="utility-nav d-md-block header-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="about-menu">
                        <li><Link to="/about" >About Us</Link></li>
                        <li><Link to="/contact" >Contact Us</Link></li>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-right">
                    <p className="small">Customer Care 1800 208 1800</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default HeadBar
  