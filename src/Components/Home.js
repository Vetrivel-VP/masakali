import React from "react";
import "../Styles/Home.css";
import Banner from "../img/Banner.png";
import { FaStar, FaClock, FaHeart } from "react-icons/fa";
import Woman from "../img/woman.jpg";
import Man from "../img/Man.jpg";
import MintLeafs from "../img/min-leafs.png";
import Mint from "../img/mint.png";
import Discount from "../img/discount.png";

function Home() {
  return (
    <section className="home section grid_layout" id="home">
      <div className="home_data">
        <div className="quote">
          <p>
            its not just Food, it's an Experience.
            <img src={MintLeafs} alt="" className="MintLeafs" />
          </p>
          <div className="button_group">
            <a href="#" className="viewMenu">
              View Menu
            </a>
            <a href="#" className="book_table">
              Book A Table
            </a>
          </div>
        </div>
        <div className="reviews">
          <p>
            Happy Customers
            <span className="stars">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
            </span>
          </p>
          <div className="review_img">
            <div className="imgBox">
              <img src={Man} alt="" />
            </div>
            <div className="imgBox">
              <img src={Woman} alt="" />
            </div>
            <div className="imgBox">
              <img src={Man} alt="" />
            </div>
            <div className="imgBox">
              <p>45+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_img">
        <img src={Mint} alt="" className="Mint" />
        <img src={Banner} alt="" />
        <div className="fastDeliver">
          <i>
            <FaClock />
          </i>
          <p>Fast Delivery</p>
        </div>

        <div className="hearts">
          <i>
            <FaHeart />
          </i>
          <p>1</p>
        </div>

        <div className="discount">
          <img src={Discount} alt="" />
          <h2>5%</h2>
          <p>
            <span>Discount</span> for 2 orders
          </p>
        </div>
      </div>
    </section>
  );
}

export { Home };
