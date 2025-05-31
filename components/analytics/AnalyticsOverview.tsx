import { BsDiscord, BsGlobe, BsTelegram, BsTwitterX } from "react-icons/bs";
import UserNav from "../UserNav";
import UserStats from "../UserStats";
import { ReactNode } from "react";
import { SocialLinks } from "@/utils/interface";






export default function AnalyticsOverview() {


    const projectTags: string[] = [ "DAO", "NFT", "NFT marketplace"]

    const projectDescription: string = "Need a marketplace for your infrastructure? This is the perfect..."

    const socialLinks: SocialLinks[] = [
        {
            link: "",
            icon:     <BsGlobe size={20} />,
        },
        {
            link: "",
            icon:     <BsDiscord size={20}/>,
        },
        {
            link: "",
            icon:     <BsTelegram size={20}/>,
        },
        {
            link: "",
            icon:    <BsTwitterX size={20}/>
        }




]




    return (
        <>
        <UserNav/>
        <UserStats
         projectTags={projectTags}
         projectDescription={projectDescription}
         socialLinks={socialLinks}
          />
        </>
    )
}