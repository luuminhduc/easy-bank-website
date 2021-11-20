import React from "react";
import iconOnline from "../../assets/images/icon-online.svg";

const Why = () => {
  return (
    <div className="why home_block">
      <div className="why_text home_block_text">
        <h1>Why chose easy banks</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
          eos officiis ea alias fuga nobis dignissimos sed voluptatum totam?
        </p>
      </div>

      <div className="why_list home_block_list">
        <div className="why_list_item home_block_list_item">
          <img src={iconOnline} alt="" />
          <h2>Online banking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            commodi. Necessitatibus debitis magni inventore! Ullam.
          </p>
        </div>
        <div className="why_list_item home_block_list_item">
          <div className="why_list_item_icon">
            <img src={iconOnline} alt="" />
          </div>
          <h2>Online banking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            commodi. Necessitatibus debitis magni inventore! Ullam.
          </p>
        </div>
        <div className="why_list_item home_block_list_item">
          <div className="why_list_item_icon">
            <img src={iconOnline} alt="" />
          </div>
          <h2>Online banking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            commodi. Necessitatibus debitis magni inventore! Ullam.
          </p>
        </div>
        <div className="why_list_item home_block_list_item">
          <div className="why_list_item_icon">
            <img src={iconOnline} alt="" />
          </div>
          <h2>Online banking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            commodi. Necessitatibus debitis magni inventore! Ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
