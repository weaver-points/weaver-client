import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignProfileCard from "./CampaignProfileCard";
const CampaignProfileTabs = () => {
  return (
    <>
      {/* Navigation */}
      <Tabs defaultValue="home" className="w-full mt-8">
        <TabsList className="bg-transparent border-b border-gray-800 dark:border-gray-200 w-full justify-start rounded-none p-0 h-auto">
          <TabsTrigger
            value="home"
            className="rounded-none text-lg font-normal data-[state=active]:font-semibold  data-[state=active]:border-[#Ebffcb] underline-offset  border-t-0 border-l-0 border-r-0 border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-white dark:data-[state=active]:text-black px-4 py-2 text-[#988C8C] dark:text-[#232222]"
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="rounded-none text-lg font-normal data-[state=active]:font-semibold  data-[state=active]:border-[#Ebffcb] last:border-transparent  border-t-0 border-l-0 border-r-0 border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-white dark:data-[state=active]:text-black px-4 py-2 text-[#988C8C] dark:text-[#232222]"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl shadow-lg border border-gray-800 dark:border-gray-200 bg-[#181818] dark:bg-white p-6 transition-transform hover:scale-[1.02]">
                <CampaignProfileCard />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="py-8 text-center text-[#988C8C] dark:text-[#232222]">
            Analytics content would appear here
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CampaignProfileTabs;
