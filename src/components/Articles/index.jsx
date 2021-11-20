import React from "react";
import moneyImg from "../../assets/images/image-currency.jpg";

const Articles = () => {
  return (
    <div className="articles home_block">
      <div className="articles_text home_block_text">
        <h1>Lastes articles</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
          eos officiis ea alias fuga nobis dignissimos sed voluptatum totam?
        </p>
      </div>

      <div className="articles_list home_block_list">
        <div className="articles_list_item home_block_list_item">
          <img src={moneyImg} alt="" />
          <div className="articles_list_item_content">
            <small>By Carlson</small>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Necessitatibus debitis magni inventore! Ullam.
            </p>
          </div>
        </div>
        <div className="articles_list_item home_block_list_item">
          <div className="articles_list_item_icon">
            <img src={moneyImg} alt="" />
          </div>
          <div className="articles_list_item_content">
            <small>By Carlson</small>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Necessitatibus debitis magni inventore! Ullam.
            </p>
          </div>
        </div>
        <div className="articles_list_item home_block_list_item">
          <div className="articles_list_item_icon">
            <img src={moneyImg} alt="" />
          </div>
          <div className="articles_list_item_content">
            <small>By Carlson</small>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Necessitatibus debitis magni inventore! Ullam.
            </p>
          </div>
        </div>
        <div className="articles_list_item home_block_list_item">
          <div className="articles_list_item_icon">
            <img src={moneyImg} alt="" />
          </div>
          <div className="articles_list_item_content">
            <small>By Carlson</small>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Necessitatibus debitis magni inventore! Ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
