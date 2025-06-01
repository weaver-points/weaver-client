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
          <div className="bg-[#111111] pb-5 " >
  <UserNav />
            <UserStats
                projectTags={projectTags}
                projectDescription={projectDescription}
                socialLinks={socialLinks}
            />
            <div className=" w-full max-w-[1111px] rounded-lg border-[#988C8C] border-[1px] mx-auto mt-[30px] h-[179px] bg-[url('/item-image.svg')] bg-no-repeat bg-center bg-cover flex items-center px-[3%] " >

<h1 className="font-bold text-[32px] text-[#ffffff] " >DAO Voter</h1>

            </div>
          </div>
    )
}