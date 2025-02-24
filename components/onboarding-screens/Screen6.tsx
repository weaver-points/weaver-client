import { useState } from "react";
import { useSwiper } from "swiper/react";
import { connect } from "get-starknet";
import Image from "next/image";
import ConnectWalletModal from "../ConnectWalletModal";
import ConnectModal from "../ConnectModal";
import ConnectedModal from "../ConnectedModal";
import ErrorModal from "../ErrorModal";

export default function OnboardScreen6() {
  const swiper = useSwiper();
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  const [showConnectingModal, setShowConnectingModal] = useState(false);
  const [showConnectedModal, setShowConnectedModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const skipToLast = () => swiper?.slideTo(6);

  const handleConnect = async () => {
    setShowConnectWalletModal(true);
  };

  const handleAcceptTerms = async () => {
    setShowConnectWalletModal(false);
    setShowConnectingModal(true);

    try {
      const connection = await connect({ include: ["argentX"] });
      if (!connection) throw new Error("No wallet found");

      await connection.enable();
      setShowConnectingModal(false);
      setShowConnectedModal(true);
    } catch (error) {
      setShowConnectingModal(false);
      setShowErrorModal(true);
    }
  };

  const handleRetry = async () => {
    setShowErrorModal(false);
    setShowConnectingModal(true);

    try {
      const connection = await connect({ include: ["argentX"] });
      if (!connection) throw new Error("No wallet found");

      await connection.enable();
      setShowConnectingModal(false);
      setShowConnectedModal(true);
    } catch (error) {
      setShowConnectingModal(false);
      setShowErrorModal(true);
    }
  };

  return (
    <div className="font-satoshi px-y min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-row items-center justify-between px-16  border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
      <small
        className="absolute top-[10%] right-[10%] text-base font-[500] transition duration-300 hover:text-[#EDFFD0] cursor-pointer"
        onClick={skipToLast}
      >
        Skip
      </small>
      <Image
        src="/connect-wallet-image.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[280px] h-[500] object-contain  self-end "
      />

      <div className="min-w-[200px] max-w-[335px] w-[17.43vw] min-h-[230px]  flex flex-col items-center justify-between text-center">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]">
          <span className="font-light leading-8">Connect Your</span>
          <span className="font-bold leading-8">
            Argent Wallet to
            <br />
            Continue
          </span>
        </p>
        <button
          onClick={handleConnect}
          className="w-full bg-[#EDFFD0] py-3 text-center text-base text-[#000000] font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] ml-5"
        >
          Connect Wallet
        </button>

        {showConnectWalletModal && (
          <ConnectWalletModal
            onCloseModal={() => setShowConnectWalletModal(false)}
            onAccept={handleAcceptTerms}
          />
        )}

        {showConnectingModal && (
          <ConnectModal handleClose={() => setShowConnectingModal(false)} />
        )}

        {showConnectedModal && (
          <ConnectedModal
            handleClose={() => setShowConnectedModal(false)}
          />
        )}

        {showErrorModal && (
          <ErrorModal
            handleClose={() => setShowErrorModal(false)}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
}