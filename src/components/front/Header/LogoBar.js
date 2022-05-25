import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

library.add(faSearch, faUser, faShoppingCart);


class LogoBar extends React.Component {
    constructor(props) {
        super(props);
        this.signUpModalShow = this.signUpModalShow.bind(this);
        this.signUpModalHide = this.signUpModalHide.bind(this);
        this.loginModalShow = this.loginModalShow.bind(this);
        this.loginModalHide = this.loginModalHide.bind(this);
        this.cityModalShow = this.cityModalShow.bind(this);
        this.cityModalHide = this.cityModalHide.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true, loginModal:"modal fade show d-none", cityModal: "modal fade show d-none", signUpModal:"modal fade show d-none"};
      }
      

    componentDidMount(){
        const user = localStorage.getItem('user') ? localStorage.getItem('user') : '';
        const city = localStorage.getItem('city') ? localStorage.getItem('city') : '';
        if(city){
            this.setState({cityModal: "modal fade show d-block"});
        }else{
            this.setState({cityModal: "modal fade show d-none"});
        }
        if(user){
            this.setState({isLoggedIn: true});
        }else{
            this.setState({isLoggedIn: false});
        }
      }
    
    cityModalShow(){
        this.setState({cityModal: "modal fade show d-block"});
        document.body.classList.add('modal-open');
    }

    cityModalHide(){
        this.setState({cityModal: "modal fade"});
        document.body.classList.remove('modal-open');
    }

    signUpModalShow(){
        this.setState({signUpModal: "modal fade show d-block"});
        document.body.classList.add('modal-open');
    }

    signUpModalHide(){
        this.setState({signUpModal: "modal fade"});
        document.body.classList.remove('modal-open');
    }

    loginModalShow(){
        this.setState({loginModal: "modal fade show d-block"});
        document.body.classList.add('modal-open');
    }

    loginModalHide(){
        this.setState({loginModal: "modal fade"});
        document.body.classList.remove('modal-open');
    }
    handleLoginClick(){

      }

    handleLogoutClick(){

      }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const loginModal = this.state.loginModal;
        const cityModal = this.state.cityModal;
        const signUpModal = this.state.signUpModal;
        var dropDown;
        if (isLoggedIn) {      
            dropDown = <div className="dropdown btn-group"> <a className="nav-link nav-icons padd" href="#"
            id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false" data-abc="true">
            <FontAwesomeIcon icon="user" className="mr-2" />
            <span>My Account</span></a>

            <div className="dropdown-menu" style={{ backdropFilter: "blur(4px)"}}>
                <a className="dropdown-item" href="{{('/myprofile') }}">My Profile</a>
                <a className="dropdown-item" href="{{('/myprofile') }}">My Orders</a>
                <a className="dropdown-item" href="{{('/myprofile') }}">My Booking</a>
                <a className="dropdown-item" href="#{{('/myprofile') }}">Change Password</a>
                <a className="dropdown-item" href="{{('/address') }}">My Address</a>
                <a className="dropdown-item" href="#">Logout</a>
            </div>
    </div>;
        } else {
            dropDown = <div className="dropdown btn-group" onClick={this.loginModalShow}> <Link className="nav-link nav-icons padd" to="#"
            id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false" data-abc="true">
            <FontAwesomeIcon icon="user" className="mr-2" />
            <span>Login</span></Link>

    </div>;
        }
        return (
        <div>
            <section className="header-main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-2 col-md-2 col-5"> <Link to="/" className="brand-wrap" data-abc="true">
                        <span className="logo colr">LOGO</span> </Link>
                    </div>
                    <div className="col-lg-7 col-xl-7 col-sm-8 col-md-4 d-none d-md-block">
                        <form action="#" className="search-wrap">
                            <div className="input-group w-100"> <input type="text" className="form-control search-form"
                                     placeholder="Search" />
                                <div className="input-group-append"> <button className="btn sec-btn search-button"
                                        type="submit"> <FontAwesomeIcon icon="search" className="mr-2" /></button> </div>
                                <div className="col-lg-6 col-xl-4 col-sm-12 col-md-12 get-services">
                                    <button className="btn" type="submit">Get AC Service Repair</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-sm-8 col-md-4 col-7">
                        <div className="d-flex justify-content-end drop">
                            {dropDown}
                            <span className="vl"></span>
                            <Link className="nav-link nav-user-img" to="/cart"><FontAwesomeIcon icon="shopping-cart" className="mr-2" /><span>my cart</span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>

        <section>
        <div className={loginModal}  id="login" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backdropFilter: "blur(4px)"}}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header pb-0" >
                        <h5 className="modal-title mt-3 log-title border-none" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.loginModalHide} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group" >
                                <input type="text" className="form-control" id="recipient-name" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="recipient-name" placeholder="Password" />
                            </div>
                            <div className="text-right mt-4 mb-4">
                                <h6>Forgot Password ?</h6>
                            </div>
                            <div className="pop-up-login text-center">
                                <button className="btn w-100">Login</button>
                                <p>New Member?
                                    <span><a className="a btn" data-toggle="modal" data-target="#sign"  onClick={() => {
                                                this.loginModalHide(); 
                                                this.signUpModalShow();
                                            }
                                        } data-dismiss="modal" >Sign Up </a></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className={cityModal} id="selectCity" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title log-title mt-3 border-none" id="exampleModalLabel">Select City</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.cityModalHide} aria-label="Close">
                            <span aria-hidden="true" >&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <select className="form-control" required>
                                    <option>Default select</option>
                                    <option>Hydrabad</option>
                                </select>
                            </div>
                            <div className="pop-up-login text-center">
                                <button type="button" className="btn mt-4 mb-5 w-100">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className={signUpModal} id="sign" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backdropFilter: "blur(4px)"}}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header pb-0" >
                        <h5 className="modal-title mt-3 border-none log-title" id="exampleModalLabel">Sign Up</h5>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.signUpModalHide} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Select City*</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="recipient-name" placeholder="Phone Number*" />
                            </div>
                            <div className="form-group">
                                <input type="Email" className="form-control" id="recipient-name" placeholder="Email Id" />
                            </div>
                            <div className="pop-up-login text-center">
                                <button className="btn w-100" data-toggle="modal" data-target="#otp" data-dismiss="modal">Get OTP</button>
                                <p>Already Registered?<span>
                                <a className="a btn" data-toggle="modal" data-target="#sign" onClick={() => {
                                                this.loginModalShow(); 
                                                this.signUpModalHide();
                                            }
                                        }>
                                            Sign In
                                        </a>
                                    </span></p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
    }
  }
  
  export default LogoBar ;
  