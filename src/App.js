import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/front/Home/Index";
import Cart from "./components/front/cart/Index";
import Service from "./components/front/Service/Index";
import Category from "./components/front/category/Index";
import Product from "./components/front/product/Index";
import Content from "./components/front/Content/Index";
import Header from "./components/front/Header/Index";
import Footer from "./components/front/Footer/Index";

import RateCard from "./components/front/AcService/RateCard";
import SPA from "./components/front/AcService/SPA";
import AddAddress from "./components/front/AcService/AddAddress";
import OtpSend from "./components/front/AcService/OtpSend";
import AddTimeAndDate from "./components/front/AcService/AddTimeAndDate";
import AcService1 from "./components/front/AcService/AcService1";
import Payment from "./components/front/AcService/PaymentMethod";

import AcRepair1 from "./components/front/AcRepair/AcRepair1";
import RateCardRepair from "./components/front/AcRepair/RateCard";
import Issue from "./components/front/AcRepair/Issue";
import SPARepair from "./components/front/AcRepair/SPA";
import AddAddressrep from "./components/front/AcRepair/AddAddress";
import AddTimeAndDateRep from "./components/front/AcRepair/AddTimeAndDate";
import otprep from "./components/front/AcRepair/OtpSend";
import PaymentRep from "./components/front/AcRepair/PaymentMethod";

import Installation from "./components/front/Installation/Index";
import Typeof from "./components/front/Installation/Typeof";
import SPAins from "./components/front/Installation/SPA";
import AddAddressins from "./components/front/Installation/AddAddress";
import OtpSendins from "./components/front/Installation/OtpSend";
import AddTimeAndDateins from "./components/front/Installation/AddTimeAndDate";
import Paymentins from "./components/front/Installation/PaymentMethod";

import  MyProfile  from "./components/front/MyProfile/MyProfile";
import Orders from "./components/front/MyProfile/Orders";
import MyBooking from "./components/front/MyProfile/MyBooking";
import ChangePassword from "./components/front/MyProfile/ChangePassword";
import MyAddress from "./components/front/MyProfile/MyAddress";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buy-ac" component={Content} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/installation" component={Installation} />
        
        <Route exact path="/addaddress" component={AddAddress} />

        {/* Ac-Service Route */}
        <Route exact  path="/ac-service/ratecard" component={RateCard}  />
        <Route exact  path="/ac-service/spa" component={ SPA } />
        <Route exact  path="/ac-service/address" component={ AddAddress } />
        <Route exact  path="/ac-service/auth" component={OtpSend} />
        <Route exact  path="/ac-service/timeanddate" component={AddTimeAndDate} />
        <Route exact  path="/ac-service/" component={AcService1}  />
        <Route exact  path="/ac-service/payment" component={Payment}  />

        {/* Ac-Repair Route */}
        <Route exact  path="/ac-repair/" component={AcRepair1}  />
        <Route exact  path="/ac-repair/ratecard/" component={RateCardRepair}  />
        <Route exact  path="/ac-repair/issue" component={Issue}  />
        <Route exact  path="/ac-repair/saprepair" component={SPARepair}  />
        <Route exact  path="/ac-repaire/addressrep" component={ AddAddressrep } />
        <Route exact  path="/ac-repair/AddTimeAndDateRepa" component={ AddTimeAndDateRep } />
        <Route exact  path="/ac-repair/auth" component={ otprep } />
        <Route exact  path="/ac-repair/payment" component={ PaymentRep } />

       {/* Installing/UnStallation Route */}
       <Route exact  path="/install/" component={Installation}  />
        <Route exact  path="/install/typeof"component={Typeof}  />
        <Route exact  path="/install/spa" component={ SPAins } />
        <Route exact  path="/install/address" component={ AddAddressins } />
        <Route exact  path="/install/auth" component={OtpSendins} />
        <Route exact  path="/install/timeanddate" component={AddTimeAndDateins} />
        <Route exact  path="/install/payment" component={Paymentins}  />

        {/* Profile Route */}
        <Route exact  path="/profile" component={MyProfile}  />
        <Route exact  path="/orders" component={Orders}  />
        <Route exact  path="/mybooking" component={MyBooking}  />
        <Route exact  path="/changepassword" component={ChangePassword}  />
        <Route exact  path="/myaddress" component={MyAddress}  />

      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
