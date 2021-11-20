import React from "react";
import BgIntroMobile from "../../assets/images/bg-intro-mobile.svg";
import BgIntroDesktop from "../../assets/images/bg-intro-desktop.svg";
import MockupImg from "../../assets/images/image-mockups.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_text">
        <h1 class="">Next generation digital banking</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam velit
          rem harum ex, excepturi quis adipisci consequuntur modi aut corrupti
          dolorum enim? Quis, similique ad.
        </p>
        <button class="btn_main">Request invite</button>
      </div>
      <div className="banner_img">
        <img className="banner_bg_mobile" src={BgIntroMobile} alt="" />
        <img className="banner_bg_desktop" src={BgIntroDesktop} alt="" />
        <img className="banner_mockup" src={MockupImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
