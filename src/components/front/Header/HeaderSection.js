import LogoBar from './LogoBar'
import HeadBar from './HeadBar'
import { Link } from 'react-router-dom'

function HeaderSection() {
    return (
       <>
       <HeadBar />
        <LogoBar />
        <header className="section">
        <nav className="navbar navbar-expand-md navbar-main">
            <div className="container">
                <form className="d-md-none my-2">
                    <div className="input-group"> <input type="search" name="search" className="form-control"
                            placeholder="Search" required="" />
                        <div className="input-group-append"> <button type="submit" className="btn btn-secondary"> <i
                                    className="fa fa-search"></i> </button> </div>
                    </div>
                </form>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#dropdown6" aria-expanded="false"> <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="dropdown6">
                    <ul className="navbar-nav mr-auto navbar-center">
                        <li className="nav-item"> <Link className="nav-link" to="/acunit">AC Units</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/portable-ac-units">Portable AC
                                units</Link>
                        </li>
                        <li className="nav-item"> <Link className="nav-link" to="/water-cooler">Water Cooler</Link>
                        </li>
                        <li className="nav-item"> <Link className="nav-link" to="/air-purifier">Air Purifier</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
    )
  }
  
  export default HeaderSection
  