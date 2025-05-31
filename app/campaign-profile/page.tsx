"use client";
import Image from "next/image";
import { Globe, MessageSquare, Share2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeContext";

export default function CampaignProfile() {
  const { theme } = useTheme();
  return (
    <div
      className={`font-satoshi w-full min-h-screen flex flex-col items-center justify-start border-[#636363] md:py-20 py-10 px-2 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* <header className="border-b  border-gray-800 p-4">
        <h1 className="text-gray-400 text-sm">Campaign Profile</h1>
      </header> */}

      <div className="border w-full border-gray-800  rounded-lg mx-4 my-6 overflow-hidden">
        {/* Profile Header */}
        {/* <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
              <Image
                src="/campaign.jpg"
                alt="Weaver logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-medium">Weaver</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>Coiton</span>
              <span className="text-blue-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <span>06/4/26, 1:44e</span>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-teal-600 text-white hover:bg-teal-700"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div> */}

        {/* Banner Image */}
        <div className="w-full h-60 relative">
          <Image
            src="/campaign.jpg"
            alt="Profile banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="px-6 pt-16 pb-6 w-full xl:max-w-[1440px] mx-auto relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6">
              {/* Profile Picture */}
              <div className="absolute -top-12 left-6">
                <div className="w-24 h-24 rounded-full border-4 border-white bg-teal-600 flex items-center justify-center relative">
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-400 border-2 border-black"></div>
                </div>
              </div>
              {/* Profile Actions */}
              <div className="flex  items-center gap-12 w-full ">
                <h2 className="text-5xl font-normal">Coiton</h2>
                <div className="flex ml-12 gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-md bg-transparent p-4  border-gray-700 text-gray-400 "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="6" r="2" fill="currentColor" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <circle cx="12" cy="18" r="2" fill="currentColor" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-md bg-transparent p-4 border-gray-700 text-gray-400 "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_289_111)">
                        <mask
                          id="mask0_289_111"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <path d="M0 0H24V24H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_289_111)">
                          <path
                            d="M18.9 1.12457H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2726L4.15543 22.8754H0.471429L9.07029 13.0183L0 1.12629H7.59429L12.8331 8.07429L18.9 1.12457ZM17.6057 20.6674H19.6457L6.48 3.21772H4.29257L17.6057 20.6674Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_289_111">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </div>
              </div>
              {/* Tags */}
              <div className="flex gap-3 ">
                <Badge className="rounded-md bg-[#1E1E1E] py-1.5 px-3 font-normal text-sm  text-white hover:bg-[#232222]">
                  DAO
                </Badge>
                <Badge className="rounded-md bg-[#1E1E1E] py-1.5 px-3 font-normal text-sm  text-white hover:bg-[#232222]">
                  NFT
                </Badge>
                <Badge className="rounded-md bg-[#1E1E1E] py-1.5 px-3 font-normal text-sm  text-white hover:bg-[#232222]">
                  NFT marketplace
                </Badge>
              </div>
              {/* Bio */}

              <p className="text-gray-400 ">
                Need a marketplace for your infrastructure? This is the
                perfect...
              </p>
              {/* Social Links */}
              <div className="flex gap-4 text-gray-400 mb-6">
                <Globe size={18} />
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                  <g clip-path="url(#clip0_289_111)">
                    <mask
                      id="mask0_289_111"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path d="M0 0H24V24H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_289_111)">
                      <path
                        d="M18.9 1.12457H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2726L4.15543 22.8754H0.471429L9.07029 13.0183L0 1.12629H7.59429L12.8331 8.07429L18.9 1.12457ZM17.6057 20.6674H19.6457L6.48 3.21772H4.29257L17.6057 20.6674Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_289_111">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {/* Follow Button and Stats */}
              <div className="flex  items-center gap-4 mb-4">
                <Button
                  variant="outline"
                  className="rounded-md mb-6 py-5 px-8 border-gray-700 text-lg bg-[#Ebffcb] hover:bg-[#232222] text-[#70750b]"
                >
                  <span className="">+</span> Follow
                </Button>
                <div className="flex items-center bg-[#232222] py-3 px-12 rounded-md gap-2 text-sm">
                  <div className="text-start">
                    <div className="text-gray-400">Followers</div>
                    <div className="text-right font-bold">8,674</div>
                  </div>
                  <div className="h-1/2 bg-white w-0.5 "></div>
                  <div>
                    <div className="text-gray-400">Token</div>
                    <div className="text-right font-bold">TGE Upcoming</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="bg-transparent border-b border-gray-800 w-full justify-start rounded-none p-0 h-auto">
              <TabsTrigger
                value="home"
                className="rounded-none underline-offset w-[120px]  data-[state=active]:border-[#e0ffb0] data-[state=active]:bg-transparent data-[state=active]:text-white px-4 py-2 text-gray-400"
              >
                Home
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-none last:border-transparent w-[120px] data-[state=active]:border-[#e0ffb0] data-[state=active]:bg-transparent data-[state=active]:text-white px-4 py-2 text-gray-400"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden border border-gray-800"
                  >
                    <div className="relative h-72">
                      <Image
                        src="/campaign.jpg"
                        alt="DAO Voter"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#232222]/50 rounded-full px-6 py-2 flex items-center gap-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.38505 10.3211C3.44187 10.8827 0.968909 12.0294 2.47511 13.4644C3.21088 14.1653 4.03033 14.6667 5.06058 14.6667H10.9394C11.9697 14.6667 12.7891 14.1653 13.5249 13.4644C15.0311 12.0294 12.5581 10.8827 11.6149 10.3211C9.4032 9.00406 6.5968 9.00406 4.38505 10.3211Z"
                            stroke="#F5F5F5"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 4.33331C11 5.99017 9.65687 7.33331 8 7.33331C6.34315 7.33331 5 5.99017 5 4.33331C5 2.67646 6.34315 1.33331 8 1.33331C9.65687 1.33331 11 2.67646 11 4.33331Z"
                            stroke="#F5F5F5"
                            stroke-width="1.5"
                          />
                        </svg>

                        <span className="text-sm">987</span>
                      </div>
                      <div className="absolute flex justify-center flex-col bottom-6 left-2  rounded-md px-1.5 py-0.5 flex items-center gap-1">
                        <div className="flex bg-[#1E1E1E]/50 justify-start items-start px-4 py-2 gap-2 rounded-full">
                          <img className="mt-1" src="/layer3.png" />
                          <span className="text-sm font-normal">Layer3</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">DAO Voter</h3>
                      </div>
                    </div>
                    <div className="p-4 bg-[#1E1E1E] h-[80px] flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className=" text-white">
                          <p className="text-lg font-semibold">
                            May 20th, 5:02pm
                          </p>
                          <p className="text-sm text-gray-400">
                            to May 31, 9:07 pm
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-center">
                        <Badge className="bg-white text-[#8bb151] rounded-full hover:bg-gray-200">
                          <div className="h-1 w-1 rounded-full">
                            <p className="hidden">s</p>
                          </div>
                          Live
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="py-8 text-center text-gray-400">
                Analytics content would appear here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
