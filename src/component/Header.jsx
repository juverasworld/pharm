import React, { useState } from 'react';
import logo from "../images/logo.png";
import overlay from "../images/overlay.jpg";
import "../App.css";

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleJoinWaitingList = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div>
        <nav className="bg-[#3C9386] text-white flex justify-between px-5 py-2">
          <div className="flex">
            <p>
              <img src={logo} alt="" />
            </p>
            <div className="flex flex-col">
              <p className="font-bold text-[20px]">Pharmassist</p>
              <p>Transforming Pharmacy Experience Empowering Lives</p>
            </div>
          </div>

          <div className="flex">
            <p>
              <button
                className="bg-[#FAAB54] rounded-lg font-bold px-5 text-[24px]"
                onClick={handleJoinWaitingList}
              >
                Join <br /> Waiting List
              </button>
            </p>
            <p>
              <button className="leading-10 pt-4 px-2 text-shadow text-[24px]">
                Contact Us
              </button>
            </p>
          </div>
        </nav>
      </div>

      {showOverlay && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" p-8 rounded text-center mx-auto">
            <button
              className=" hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={handleOverlayClose}
            >
             <img src={overlay} alt=""  className="w-[80%] mx-auto px-auto h" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
