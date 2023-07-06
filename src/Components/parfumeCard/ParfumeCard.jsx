import React from "react";
import "./parfumeCard.css";
import 'animate.css';

function ParfumeCard() {
  return (
    <div className="parfumeCard">
      <div className="parfumeCardWrapper animate__animated animate__backInDown">
        <div className="parfumeCardLeft">
          <img src="assets/images/image-product-desktop.jpg" alt="parfumePreview" className="parfumeCardLeftImgDesktop" />
          <img src="assets/images/image-product-mobile.jpg" alt="parfumePreview" className="parfumeCardLeftImgMobile" />
        </div>
        <div className="parfumeCardRight">
          <span className="parfumeCardRightHeader">PERFUME</span>
          <h3 className="parfumeCardRightTitle">
            Gabrielle Essence Eau De Parfum
          </h3>
          <span className="parfumeCardRightDesc">
            A floral,solar and voluptuous interpretation composed by olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </span>
          <div className="parfumeCardRightPrice">
            <span className="parfumeLastPrice">$149.99</span>
            <span className="parfumeOldPrice">$169.99</span>
          </div>

          <button className="parfumeCardRightButton"><img src="assets/images/icon-cart.svg" alt="icon-cart" className="iconCartImg" /> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ParfumeCard;
