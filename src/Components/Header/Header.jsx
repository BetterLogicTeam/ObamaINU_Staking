import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/image/logo.png";
import Wallet_Model from "../Wallet_Model/Wallet_Model";
import { useSelector } from "react-redux";
export default function Header() {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="App z-2">
        <div className="overflow-hidden bg-gray-100 relative z-0 text-white-100 font-spartan">
          <div className=" opacity-1">
            <div className="container mx-auto lg:px-20 px-5 flex items-center justify-between py-3">
              <a href="/">
                <img src={logo} alt="logo" className="w-24" />
              </a>
              <button
                className="py-2 px-8 bg-btn-2 font-semibold text-lg rounded-md transition hover:scale-125"
                onClick={showModal}
              >
                {acc==null ? "Connect":acc.substring(0,4)+"..."+acc.substring(acc.length-4)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Wallet_Model handleCancel={handleCancel} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
