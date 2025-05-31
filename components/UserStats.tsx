import { SocialLinks } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";




interface UserStatsProps {
    projectTags: string[];
    projectDescription: string;
    socialLinks: SocialLinks[]
}




export default function UserStats({ projectTags, projectDescription, socialLinks }: UserStatsProps) {
    return (
        <section className="py-7 flex flex-col items-start w-full " >

            <div className="w-full h-[126px] bg-[#988C8C] " ></div>

            <div className=" w-full flex flex-col gap-10 items-start  pl-[10%] px-[4%] " >

                <div className=" w-[138px] h-[138px] rounded-full bg-transparent flex items-center justify-center border-[5px] border-[#FEF6E7] " >
                    <Image src={"/user-icon.svg"} alt="user profile image" height={100} width={100} className=" rounded-full bg-cover bg-center h-[103px] w-[103px] " />
                </div>


                <div className="w-full flex items-start gap-10 justify-between " >

                    <div className="w-full basis-1/2 flex flex-col gap-5 " >

                        <div className=" flex items-center justify-between gap-5" >
                            <h1 className="font-medium text-5xl text-[#FFFFFF] " >Coiton</h1>

                            <div className="flex items-center gap-4" >
                                <button className="flex items-center justify-center border-[1px] border-[#EBFFCB] p-[13px] rounded-[4px] "><FaEllipsis size={25} /> </button>
                                <button className="flex items-center justify-center border-[1px] border-[#EBFFCB] p-[13px] rounded-[4px] "><BsTwitterX size={25} /> </button>
                            </div>
                        </div>

                        <div className="flex w-fit items-center gap-2">
                            {projectTags.map((tag, index) => (
                                <span key={index} className="rounded-[4px] bg-[#1E1E1E] py-1 px-2 text-base font-normal text-[#FFFFFF] " > {tag} </span>
                            ))}
                        </div>

                        <p className="text-lg font-normal text-[#988C8C] " >{projectDescription}</p>

                        <div className="flex items-center gap-6" >
                          {socialLinks.map((link, index) => (
                            <Link key={index} href={link.link} >   <button className="text-[#757575] " >{link.icon} </button> </Link>
                          ))}

                        </div>

                    </div>


                    <div className=" basis-1/2 flex items-start justify-center gap-4  ">

                    <button className="py-3 px-6 flex items-center justify-center gap-[5px] text-2xl font-bold text-[#70750B] bg-[#EBFFCB] border-[1px] border-[#988C8C] rounded-lg " > <PiPlus/> Follow</button>

                    <div className=" bg-[#232222] flex items-center justify-center rounded-[10px] gap-2 " >
                        <div className="flex flex-col items-center gap-1">
                            <p></p>
                        </div>

                    </div>

                    </div>

                </div>


            </div>

        </section>
    )
}