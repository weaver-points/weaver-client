import { Dot, User } from "lucide-react";

interface CampaignsProps {
    campaigns: Campaign[];
}

interface Campaign {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    owner: string;
    activeCount: number;
    icon: string;
}
interface CampaignCardProps {
    campaign: Campaign;
    onClick?: () => void;
    otherBg?: string;
}

const Campaigns = ({ campaigns }: CampaignsProps) => {
    return (
        <div className="w-full grid grid-cols-2 gap-6 mt-8">
            {campaigns.map((campaign) => (
                <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    otherBg={Number(campaign.id) % 2 == 0 ? "dao-pattern" : ""}
                />
            ))}
        </div>
    );
};

const CampaignCard = ({ campaign, otherBg }: CampaignCardProps) => {
    return (
        <div
            className="w-full border rounded flex flex-col"
            onClick={() => (location.href = `/dashboard/campaign-details`)}
        >
            <div
                className={
                    !otherBg
                        ? `h-64 nft-pattern bg-cover bg-center bg-no-repeat rounded`
                        : `h-64 bg-cover bg-center bg-no-repeat rounded ${otherBg}`
                }
            >
                <div className="bg-black/50 h-full p-4">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex justify-end">
                            <span className="rounded-full bg-[#444444] border inline-block py-1 px-2">
                                <div className="flex space-x-2">
                                    <User />{" "}
                                    <span className="text-sm">
                                        {campaign.activeCount}
                                    </span>
                                </div>
                            </span>
                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <div>
                                <span className="rounded-full bg-[#444444] border inline-block py-1 px-2">
                                    <div className="flex space-x-2">
                                        <img
                                            src={campaign.icon}
                                            alt="Icon"
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm">
                                            {campaign.owner}
                                        </span>
                                    </div>
                                </span>
                            </div>

                            <p className="text-2xl font-bold">
                                {campaign.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 px-4 flex bg-[#1E1E1E] justify-between items-center">
                <div>
                    <p className="">{campaign.startDate}</p>
                    <p className="text-sm text-[#988C8C]">{campaign.endDate}</p>
                </div>
                <div>
                    <span className="rounded-full bg-white border inline-block py-1 px-2">
                        <div className="flex items-center">
                            <Dot color="#8BB151" />
                            <span className="text-sm text-[#8BB151]">Live</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;
