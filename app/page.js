"use client";

import Link from "next/link";
import Header from "./components/header";
import {
  metamaskWallet,
  walletConnect,
  trustWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";

export default function Home() {
  return (
    <>
      <ThirdwebProvider
        supportedWallets={[metamaskWallet(), walletConnect(), trustWallet()]}
        activeChain="mumbai"
        clientId="236a1a86c9c96ae3cd24222c2739d141"
      >
        <Header />
        <div className="mx-auto py-[50px] px-[12px] md:py-[100px] md:w-[65%] lg:py-20 relative hero-section-bg">
          <div className="mb-3 flex justify-center">
            <span className="font-medium items-center border-1 flex tracking-normal border-[#363637] bg-[#191028] rounded-full px-6 py-2 text-xs md:text-base">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7273 0L13.6964 2.25L11.4545 3.27273L13.6964 4.30364L14.7273 6.54545L15.75 4.30364L18 3.27273L15.75 2.25M6.54545 2.45455L4.5 6.95455L0 9L4.5 11.0455L6.54545 15.5455L8.59091 11.0455L13.0909 9L8.59091 6.95455M14.7273 11.4545L13.6964 13.6964L11.4545 14.7273L13.6964 15.75L14.7273 18L15.75 15.75L18 14.7273L15.75 13.6964"
                  fill="url(#paint0_linear_279_6)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_279_6"
                    x1="9"
                    y1="0"
                    x2="9"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#548DD0" />
                    <stop
                      offset="0.9999"
                      stop-color="#476CED"
                      stop-opacity="0.875313"
                    />
                    <stop offset="1" stop-color="#4249FA" stop-opacity="0.82" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="pl-2">Start your SAFE journey on polygon</span>
            </span>
          </div>
          <h1 className="md:text-[75px] text-4xl font-extrabold	text-center mb-8 sm:leading-[50px] md:leading-[95px] md:mb-[28px]">
            Start your <span className="heading-color">SAFE</span> investment with us on polygon blockchain
          </h1>
          <h4 className="text-sm md:text-2xl text-center mb-[38px] md:px-5 text-[#A9A9A9]">
            The first decentralised SAFE platform on polygon layer-2 network for
            your investments. Get your investments in a decentralized manner by
            signing transactions on polygon blockchain
          </h4>
          <div className="flex flex-wrap justify-center">
            <Link
              href="./safe"
              className="inline-flex !rounded-lg cursor-pointer font-medium items-center wallet-button justify-center transition duration-200 active:scale-90 border border-1 bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 md:rounded-full px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5"
            >
              Create SAFE
            </Link>
            <button
              type="button"
              className="inline-flex !rounded-lg cursor-pointer font-medium items-center wallet-button justify-center transition duration-200 active:scale-90 border border-1 bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 md:rounded-full px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5"
            >
              Dashboard
            </button>
          </div>
        </div>
      </ThirdwebProvider>
    </>
  );
}
