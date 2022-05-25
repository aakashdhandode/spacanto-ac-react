import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

function Banners(){
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
        return (
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item id="bann_0">
                        <img src="images/benner.png" alt="" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item id="bann_1">
                        <img src="images/benner.png" alt="" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item id="bann_2">
                        <img src="images/benner.png" alt="" className="img-fluid" />
                    </Carousel.Item>
                </Carousel>
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" onClick={() => handleSelect(0)}></li>
                    <li data-target="#demo" data-slide-to="1" onClick={() => handleSelect(1)}></li>
                    <li data-target="#demo" data-slide-to="2" onClick={() => handleSelect(2)}></li>
                </ul>
            </div>
        </div>
        )
  }
  
  export default Banners
  