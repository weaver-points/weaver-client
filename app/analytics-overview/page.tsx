import AnalyticsSection from "@/components/analytics/AnalyticsSection";
import { cardData } from "@/components/analytics/data";
import UserNav from "@/components/analytics/UserNav";
import UserStats from "@/components/analytics/UserStats";
import { SocialLinks } from "@/utils/interface";
import { BsDiscord, BsGlobe, BsTelegram, BsTwitterX } from "react-icons/bs";







export default function Page() {


    const projectTags: string[] = ["DAO", "NFT", "NFT marketplace"]

    const projectDescription: string = "Need a marketplace for your infrastructure? This is the perfect..."

    const socialLinks: SocialLinks[] = [
        {
            link: "",
            icon: <BsGlobe size={20} />,
        },
        {
            link: "",
            icon: <BsDiscord size={20} />,
        },
        {
            link: "",
            icon: <BsTelegram size={20} />,
        },
        {
            link: "",
            icon: <BsTwitterX size={20} />
        }
    ]









    return (
        <div className="min-h-screen bg-background text-foreground pb-5 font-satoshi">
            <UserNav />
            <UserStats
                projectTags={projectTags}
                projectDescription={projectDescription}
                socialLinks={socialLinks}
            />
            <AnalyticsSection data={cardData} />
        </div>
    )
}