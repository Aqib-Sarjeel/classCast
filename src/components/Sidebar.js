import React from "react";
import myIcon from "../../src/1.png";
import { RiMoonClearLine, RiHeartPulseFill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { GiShinyApple } from "react-icons/gi";
import { BsThreeDotsVertical, BsThreeDots, BsChatDots } from "react-icons/bs";

function Sidebar() {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-header">
          <div>
            <div className="image-text">
              <div>
                <img src={myIcon} alt="pic" className="image" />
              </div>

              <div className="text">
                Floyd Miles <br />
                Free account
              </div>
            </div>
          </div>

          <div>
            <div className="header-icons">
              <IoIosNotificationsOutline />
            </div>
          </div>
          <div>
            <div className="header-icons">
              <AiOutlineBars />
            </div>
          </div>
        </div>
        <div className="heading-text">
          <h2>Health</h2>
        </div>
        <div className="sidebar-cards">
          <div>
            <div className="card-1">
              <h2>6:24</h2>
              <span>
                <RiMoonClearLine />
              </span>
              Hours
              <hr />
            </div>
          </div>
          <div>
            <div className="card-2">
              <h2>120</h2>
              <span>
                <RiHeartPulseFill />
              </span>
              Bpm
              <hr />
            </div>
          </div>
          <div className="card-3">
            <h2>1.84</h2>
            <span>
              <GiShinyApple />
            </span>
            KCal
            <hr />
          </div>
        </div>

        <div className="sign-up">
          <div>
            <img height="80px" alt="pic" src={myIcon} />
          </div>
          <div>
            <p> Sign Up for a personal trainer to to improve results</p>
            <button>Sign Up</button>
          </div>
        </div>

        <div className="heading-text">
          <h2>Today's trainings</h2>
        </div>
        <div className="blue-box">
          <div className="inner-text-1">
            <h3>Box</h3>
            <p>Sport Club</p>
            <span>12:00</span>
          </div>
          <div className="inner-text-2">
            <h1>40</h1>
            <p>min</p>
            <p className="inner-text-1-p">Warm-up</p>
          </div>
          <div className="inner-text-2">
            <h1>40</h1>
            <p>min</p>
            <p className="inner-text-1-p">stretch</p>
          </div>
          <div className="dot-icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="red-box">
          <div className="inner-text-1">
            <h3>Box</h3>
            <p>Sport Club</p>
            <span>12:00</span>
          </div>
          <div className="inner-text-2">
            <h1>40</h1>
            <p>min</p>
            <p className="inner-text-2-p">Warm-up</p>
          </div>
          <div className="inner-text-2">
            <h1>40</h1>
            <p>min</p>
            <p className="inner-text-2-p">Pull-Ups</p>
          </div>
          <div className="dot-icon">
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className="hr-dots">
          <BsThreeDots size="30px" />
        </div>
        <div className="sidebar-header">
          <div>
            <div className="image-text">
              <div>
                <img src={myIcon} alt="pic" className="image" />
              </div>

              <div className="text">
                Floyd Miles <br />
                Free account
              </div>
            </div>
          </div>
          <div>
            <div className="header-icons">
              <BsChatDots />
            </div>
          </div>
        </div>
        <div className="sidebar-header">
          <div>
            <div className="image-text">
              <div>
                <img src={myIcon} alt="pic" className="image" />
              </div>

              <div className="text">
                Floyd Miles <br />
                Free account
              </div>
            </div>
          </div>
          <div>
            <div className="header-icons">
              <BsChatDots />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
