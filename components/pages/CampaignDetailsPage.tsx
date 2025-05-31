import { useState } from "react";
import Banner from "../dashboard-components/Banner";
import BannerCampaign from "../dashboard-components/BannerCampaign";

const CampaignDetails = () => {
    return (
        <div className="px-18 py-16 flex flex-col space-y-4">
            <BannerCampaign
                title="Early NFT Collector"
                icon={"/coiton-logo.png"}
                owner="Coiton"
                shareLink="/"
                telegramLink="/"
                xLink="/"
            />
            <Banner date="20th May, 5:20pm" />
            <div>
                <p className="text-[22px]">
                    This campaign rewards early adopters who mint and hold a
                    genesis or limited edition NFT. It will be used to give
                    early community members special access later.
                </p>
                <p className="mt-3 text-[22px]">
                    <span className="font-bold">Goal: </span> Distribute limited
                    NFTs and build early collector hype.
                </p>
            </div>
            <TasksSection />
        </div>
    );
};

const tasksObj = [
    {
        title: "Mint the Genesis NFT from a drop page.",
        details: [
            "Visit the drop page URL",
            "Connect your crypto wallet (e.g., MetaMask)",
            'Click the "Mint" button',
            "Approve the transaction in your wallet",
        ],
    },
    {
        title: "Hold it in your wallet for at least 7 days (verified via snapshot or chain data)",
        details: null,
    },
    {
        title: "Share your NFT on Twitter (bonus task)",
        details: null,
    },
];

const TasksSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-black p-4 rounded-lg w-full ">
            <h2 className="text-white text-lg font-medium mb-2">Tasks</h2>
            <div className="space-y-2">
                {tasksObj.map((task, idx) => (
                    <div key={idx}>
                        <button
                            className={`w-full flex items-center space-x-5 px-4 py-2 rounded transition-colors focus:outline-none border ${
                                openIndex === idx
                                    ? "bg-[#E0FFB0] border-blue-400"
                                    : "bg-[#E0FFB0] border-transparent"
                            }`}
                            onClick={() =>
                                setOpenIndex(idx === openIndex ? -1 : idx)
                            }
                        >
                            <span className="ml-2 text-2xl text-black">
                                {openIndex === idx ? "▾" : "▸"}
                            </span>
                            <span className="text-black">{task.title}</span>
                        </button>
                        {openIndex === idx && task.details && (
                            <div className="bg-black border border-[#988C8C] rounded px-12 py-4 my-5 mx-8">
                                <ol className="list-decimal list-inside text-[#EBFFCB] text-[22px] space-y-3">
                                    {task.details.map((step, i) => (
                                        <li key={i}>
                                            {step.includes('"Mint"') ? (
                                                <span>
                                                    Click the{" "}
                                                    <span className="font-semibold">
                                                        "Mint"
                                                    </span>{" "}
                                                    button
                                                </span>
                                            ) : (
                                                step
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignDetails;
