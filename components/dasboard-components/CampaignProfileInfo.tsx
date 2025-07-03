import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const CampaignProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
      {/* Avatar and Name */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
        <div className="relative flex justify-center md:justify-start w-full md:w-auto">
          <div className="w-32 h-32 rounded-full mb-4 border-[4.5px] border-white dark:border-[#232222] flex items-center justify-center relative shadow-lg bg-white dark:bg-[#181818]">
            <img
              className="h-[5.5rem] w-[5.5rem] object-cover rounded-full"
              src="/profile-img.png"
            />
            <img
              src="/verified.png"
              className="absolute -bottom-1 -right-1 w-8 h-8"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">Coiton</h2>
          {/* Tags */}
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge className="rounded-md bg-gray-100 text-gray-800 dark:bg-[#232222] dark:text-white py-1.5 px-3 font-normal text-sm hover:bg-gray-200 dark:hover:bg-[#181818]">DAO</Badge>
            <Badge className="rounded-md bg-gray-100 text-gray-800 dark:bg-[#232222] dark:text-white py-1.5 px-3 font-normal text-sm hover:bg-gray-200 dark:hover:bg-[#181818]">NFT</Badge>
            <Badge className="rounded-md bg-gray-100 text-gray-800 dark:bg-[#232222] dark:text-white py-1.5 px-3 font-normal text-sm hover:bg-gray-200 dark:hover:bg-[#181818]">NFT marketplace</Badge>
          </div>
        </div>
      </div>
      {/* Profile Actions and Stats */}
      <div className="flex flex-col md:items-end gap-4 w-full md:w-auto mt-4 md:mt-0">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="rounded-md py-4 px-8 text-lg bg-[#Ebffcb] dark:bg-[#232222] hover:bg-[#e0ffb0] dark:hover:bg-[#181818] text-[#4d4d1a] dark:text-[#Ebffcb] shadow-md border border-[#b6d97a] dark:border-[#232222] font-semibold"
          >
            <span className="mr-1">+</span> Follow
          </Button>
          <div className="flex ml-2 gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-md bg-transparent p-4 border-[#e0ffb0] dark:border-[#232222] text-[#988C8C] dark:text-[#Ebffcb] shadow"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6" r="2" fill="currentColor" /><circle cx="12" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="18" r="2" fill="currentColor" /></svg>
            </Button>
            {/* X Icon Button */}
            <Button
              size="icon"
              variant="outline"
              className="rounded-md bg-transparent p-4 border-[#e0ffb0] dark:border-[#232222] shadow"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-700 dark:text-[#Ebffcb]" />
              </svg>
            </Button>
          </div>
        </div>
        {/* Stats */}
        <div className="flex items-center bg-gray-100 text-gray-900 dark:bg-[#232222] dark:text-white py-3 px-8 rounded-md gap-4 text-sm mt-2">
          <div className="flex flex-col items-start">
            <div className="text-[#988C8C] dark:text-[#Ebffcb] text-sm">Followers</div>
            <div className="text-right text-lg font-bold text-gray-900 dark:text-white">8,674</div>
          </div>
          <div className="h-8 bg-gray-300 dark:bg-[#232222] w-0.5 mx-4"></div>
          <div>
            <div className="text-[#988C8C] dark:text-[#Ebffcb] text-sm">Token</div>
            <div className="text-right text-lg font-bold text-gray-900 dark:text-white">TGE Upcoming</div>
          </div>
        </div>
      </div>
      {/* Bio and Social Links */}
      <div className="w-full mt-6 flex flex-col gap-2">
        <p className="text-[#988C8C] dark:text-[#Ebffcb] text-base">
          Need a marketplace for your infrastructure? This is the perfect...
        </p>
        <div className="flex gap-4 items-center text-[#988C8C] dark:text-[#Ebffcb] mb-2 flex-wrap">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03864 6.32703 7.57466 5.06124 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57827 18.9323 6.04429 17.6682 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.6565 6.76161 15.1931 5.56611 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="#757575"
            />
          </svg>

          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.8398 2.05599C20.8834 1.79131 20.8552 1.51977 20.7582 1.26967C20.6612 1.01957 20.4989 0.800056 20.2883 0.634004C20.0776 0.467951 19.8262 0.361435 19.5604 0.325553C19.2945 0.289671 19.0239 0.325736 18.7768 0.429991L1.67678 7.62999C0.484783 8.13199 0.423783 9.85599 1.67678 10.376C2.91767 10.893 4.17646 11.366 5.45078 11.794C6.61878 12.18 7.89278 12.537 8.91378 12.638C9.19278 12.972 9.54378 13.294 9.90178 13.588C10.4488 14.038 11.1068 14.501 11.7868 14.945C13.1488 15.835 14.6598 16.686 15.6778 17.24C16.8948 17.9 18.3518 17.14 18.5698 15.813L20.8398 2.05599ZM3.59378 8.99299L18.7178 2.62499L16.5998 15.465C15.6008 14.922 14.1618 14.109 12.8798 13.271C12.2889 12.8916 11.7185 12.4814 11.1708 12.042C11.0244 11.9224 10.8823 11.7977 10.7448 11.668L14.7058 7.70799C14.8934 7.52048 14.9989 7.26611 14.999 7.00084C14.9991 6.73557 14.8938 6.48113 14.7063 6.29349C14.5188 6.10585 14.2644 6.00038 13.9991 6.00029C13.7339 6.00019 13.4794 6.10548 13.2918 6.29299L8.95478 10.63C8.22078 10.536 7.19878 10.264 6.07678 9.89399C5.2415 9.61568 4.41386 9.3149 3.59478 8.99199L3.59378 8.99299Z"
              fill="#757575"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2701 5.33C17.9401 4.71 16.5001 4.26 15.0001 4C14.9737 4.00038 14.9486 4.01116 14.9301 4.03C14.7501 4.36 14.5401 4.79 14.4001 5.12C12.8091 4.88015 11.1911 4.88015 9.60012 5.12C9.46012 4.78 9.25012 4.36 9.06012 4.03C9.05012 4.01 9.02012 4 8.99012 4C7.49012 4.26 6.06012 4.71 4.72012 5.33C4.71012 5.33 4.70012 5.34 4.69012 5.35C1.97012 9.42 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84 19.3101 5.35C19.3001 5.34 19.2901 5.33 19.2701 5.33ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z"
              fill="#757575"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_285_34"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M0 0H24V24H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_285_34)">
              <path
                d="M18.9 1.12457H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2726L4.15543 22.8754H0.471429L9.07029 13.0183L0 1.12629H7.59429L12.8331 8.07429L18.9 1.12457ZM17.6057 20.6674H19.6457L6.48 3.21772H4.29257L17.6057 20.6674Z"
                fill="#757575"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CampaignProfileInfo;
