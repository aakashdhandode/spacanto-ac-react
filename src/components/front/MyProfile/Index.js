// import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
// import ProfileSIdeBar from "./ProfileSIdeBar";

// library.add(faShieldAlt);

// class Index extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { products: this.props.products };
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="top-page-links">
//           <a href="">Home / My Account </a>
//         </div>
//         <div className="row">
//           {/* <div className="col-md-2 mb-3 profile">
//             <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   id="v-pills-home-tab"
//                   data-toggle="pill"
//                   href="#myprofile"
//                   role="tab"
//                   aria-controls="v-pills-home"
//                   aria-selected="true"
//                 >
//                   My Profile
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="v-pills-profile-tab"
//                   data-toggle="pill"
//                   href="#myorders"
//                   role="tab"
//                   aria-controls="v-pills-profile"
//                   aria-selected="false"
//                 >
//                   My Orders
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="v-pills-profile-tab"
//                   data-toggle="pill"
//                   href="#mybooking"
//                   role="tab"
//                   aria-controls="v-pills-profile"
//                   aria-selected="false"
//                 >
//                   My Booking
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="contact-tab"
//                   data-toggle="tab"
//                   href="#changepwd"
//                   role="tab"
//                   aria-controls="contact"
//                   aria-selected="false"
//                 >
//                   Change Password
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="contact-tab"
//                   data-toggle="tab"
//                   href="#myaddress"
//                   role="tab"
//                   aria-controls="contact"
//                   aria-selected="false"
//                 >
//                   My Address
//                 </a>
//               </li>
//             </ul>
//           </div> */}
//         {/* <ProfileSIdeBar /> */}
//           <div className="col-md-10 vertical-line pl-4">
//             <div className="tab-content" id="myTabContent">
//               {/* <div
//                 className="tab-pane fade show active col-md-4"
//                 id="myprofile"
//                 role="tabpanel"
//                 aria-labelledby="v-pills-home-tab"
//               >
//                 <h4>My Profile</h4>
//                 <form className="mt-4">
//                   <div className="form-group">
//                     <label>Name</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name=""
//                       placeholder="Enter Name"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone Number</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Phone Number"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Email ID</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="email"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>City</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="City"
//                     />
//                   </div>

//                   <button type="submit" className="btn button-color mt-4">
//                     Save Changes
//                   </button>
//                 </form>
//               </div> */}

//         {/* Basic Profile Done  */}
//               {/* <div
//                 className="tab-pane fade col-md-9"
//                 id="myorders"
//                 role="tabpanel"
//                 aria-labelledby="v-pills-profile-tab"
//               >
//                 <h4>My Orders</h4>
//                 <div className="mt-4 row booking_box">
//                   <div className="col-md-4 pro-img">
//                     <img
//                       src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="booking_box_title">
//                       <p className="col-8 ">
//                         Voltas Adjustable
//                         <br /> Inverter Split Ac 185v Ads(R32)
//                       </p>
//                       <span className="">Rs.63,333</span>
//                     </div>

//                     <table style={{width:100+ '%'}}>
//                       <tr>
//                         <td className="title-color">Type</td>
//                         <td>Invertor AC Unit</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Tonnage</td>
//                         <td>Tonnage</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Quantity</td>
//                         <td>1</td>
//                       </tr>
//                     </table>
//                     <div
//                       className="reschedule title-color"
//                       style={{float: 'right', margin: '-19px 0 0 0'}}
//                     >
//                       <p>Delivered on 23/11/2020</p>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
             
// {/* My Order Done */}
//               {/* <div
//                 className="tab-pane fade col-md-9"
//                 id="mybooking"
//                 role="tabpanel"
//                 aria-labelledby="v-pills-profile-tab"
//               >
//                 <h4>My Bookings</h4>
//                 <div className="mt-4 row booking_box">
//                   <div className="col-md-4 pro-img">
//                     <img
//                       src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="booking_box_title">
//                       <p className="col-8 ">AC Repair</p>
//                       <span className="">Rs.333</span>
//                     </div>
//                     <table style={{width:100+ '%'}}>
//                       <tr>
//                         <td className="title-color">Type</td>
//                         <td>WINDOW AC</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Issue</td>
//                         <td>AC not starting</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Slot</td>
//                         <td>23/11/2020</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Quantity</td>
//                         <td>1</td>
//                       </tr>
//                     </table>
//                     <div className="reschedule mt-2">
//                       <a href="">Cancel the booking</a>
//                       <a href="" className="float-right">
//                         Reschedule the Slot
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 row booking_box">
//                   <div className="col-md-4 pro-img">
//                     <img
//                       src="http://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-Transparent.png"
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="booking_box_title">
//                       <p className="col-8 ">AC Repair</p>
//                       <span className="">Rs.333</span>
//                     </div>
//                     <table style={{width:100+ '%'}}>
//                       <tr>
//                         <td className="title-color">Type</td>
//                         <td>WINDOW AC</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Issue</td>
//                         <td>AC not starting</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Slot</td>
//                         <td>23/11/2020</td>
//                       </tr>
//                       <tr>
//                         <td className="title-color">Quantity</td>
//                         <td>1</td>
//                       </tr>
//                     </table>
//                     <div className="mt-2">
//                       <p className="title-color">
//                         Service done on <span>23/11/2020</span>{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

//               {/* <!-- change password --> */}
//               {/* <div
//                 className="tab-pane fade col-md-4"
//                 id="changepwd"
//                 role="tabpanel"
//                 aria-labelledby="contact-tab"
//               >
//                 <h4>Change Password</h4>
//                 <form className="mt-5">
//                   <div className="form-group">
//                     <label>Old Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       name=""
//                       placeholder="****************"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>New Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       name=""
//                       placeholder="New Password"
//                     />
//                   </div>
//                   <button type="submit" className="btn button-color mt-4">
//                     Change Password
//                   </button>
//                 </form>
//               </div> */}
//   {/* <!-- change password END--> */}

// {/* My Address Start */}
//               {/* <div
//                 className="tab-pane fade"
//                 id="myaddress"
//                 role="tabpanel"
//                 aria-labelledby="contact-tab"
//               >
//                 <h4>My Address</h4>
//                 <div className="row mt-5">
//                   <div className="col-sm-4">
//                     <div className="location-box">
//                       <i className="fa fa-map-marker" aria-hidden="true"></i>
//                       <h5>Home</h5>
//                       <p>
//                         118, Qutub Vihar, New
//                         <br /> Delhi 10007,
//                         <br /> India
//                       </p>
//                       <a href="" style={{float:'right'}} className="clr">
//                         <b>Edit Location</b>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-sm-4">
//                     <div className="location-box">
//                       <i className="fa fa-map-marker" aria-hidden="true"></i>
//                       <h5>Home</h5>
//                       <p>
//                         118, Qutub Vihar, New
//                         <br /> Delhi 10007,
//                         <br /> India
//                       </p>
//                       <a href="" style={{float:'right'}} className="clr">
//                         <b>Edit Location</b>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-sm-4">
//                     <div className="location-add">
//                       <a
//                         href=""
//                         className="clr"
//                         data-toggle="modal"
//                         data-target=".bd-example-modal-lg"
//                       >
//                         <i className="fa fa-plus" aria-hidden="true"></i>
//                         <h4> Add Location </h4>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="modal fade bd-example-modal-lg"
//                   tabindex="-1"
//                   role="dialog"
//                   aria-labelledby="myLargeModalLabel"
//                   aria-hidden="true"
//                 >
//                   <div
//                     className="modal-dialog modal-lg"
//                     style={{top: -51 + 'px'}}
//                     role="document"
//                   >
//                     <div className="modal-content">
//                       <div
//                         className="modal-header"
//                         style={{border:'none', padding: '10px 7px 0px 27p'}}
//                       >
//                         <h5 className="modal-title" id="exampleModalLabel">
//                           <b>Enter Address</b>
//                         </h5>
//                         <button
//                           type="button"
//                           className="close"
//                           style={{color: 'black'}}
//                           data-dismiss="modal"
//                           aria-label="Close"
//                         >
//                           <span aria-hidden="true">&times;</span>
//                         </button>
//                       </div>
//                       <div className="modal-body">
//                         <div className="container">
//                           <div className="row">
//                             <div className="col-md-5">
//                               <form>
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id=""
//                                     placeholder="Example input"
//                                   />
//                                 </div>
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id=""
//                                     placeholder="Another input"
//                                   />
//                                 </div>
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id=""
//                                     placeholder="Another input"
//                                   />
//                                 </div>
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id=""
//                                     placeholder="Another input"
//                                   />
//                                 </div>
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id=""
//                                     placeholder="Another input"
//                                   />
//                                 </div>

//                                 <div
//                                   className="btn-toolbar tree-button"
//                                   role="toolbar"
//                                   aria-label="Toolbar with button groups"
//                                 >
//                                   <div
//                                     className="btn-group mr-2"
//                                     role="group"
//                                     aria-label="First group"
//                                   >
//                                     <button
//                                       type="button"
//                                       className="btn btn-secondary"
//                                     >
//                                       Home
//                                     </button>
//                                   </div>
//                                   <div
//                                     className="btn-group mr-2"
//                                     role="group"
//                                     aria-label="Second group"
//                                   >
//                                     <button
//                                       type="button"
//                                       className="btn btn-secondary"
//                                     >
//                                       Office
//                                     </button>
//                                   </div>
//                                   <div
//                                     className="btn-group"
//                                     role="group"
//                                     aria-label="Third group"
//                                   >
//                                     <button
//                                       type="button"
//                                       className="btn btn-secondary"
//                                     >
//                                       Other
//                                     </button>
//                                   </div>
//                                 </div>
//                                 <div
//                                   className="text-center location-submit"
//                                   role="group"
//                                   aria-label=""
//                                 >
//                                   <button
//                                     type="button"
//                                     className="btn btn-secondary"
//                                   >
//                                     Add new location
//                                   </button>
//                                 </div>
//                               </form>
//                             </div>
//                             <div className="col-md-7">
//                               <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.74823051506!2d79.03443641487415!3d17.23099888817244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDEzJzUxLjYiTiA3OcKwMDInMTEuOSJF!5e0!3m2!1sen!2sin!4v1609765574406!5m2!1sen!2sin"
//                                 width="100%"
//                                 height="350"
//                                 frameborder="0"
//                                 style={{border:0}}
//                                 allowfullscreen=""
//                                 aria-hidden="false"
//                                 tabindex="0"
//                               ></iframe>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//             {/* Address End */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Index;
