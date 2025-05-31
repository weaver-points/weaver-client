import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";






export default function UserStats() {
    return(
        <section className="py-7 flex flex-col items-start w-full " >

            <div className="w-full h-[126px] bg-[#988C8C] " ></div>

            <div className=" w-full flex flex-col gap-10 items-start  pl-[10%] px-[4%] " >

          <div className=" w-[138px] h-[138px] rounded-full bg-transparent flex items-center justify-center border-[5px] border-[#FEF6E7] " >
                  <Image src={"/user-icon.svg"} alt="user profile image" height={100} width={100} className=" rounded-full bg-cover bg-center h-[103px] w-[103px] " />
          </div>


          <div className="w-full bg-red-400 flex items-start gap-10 justify-between " >

            <div className="w-full basis-[1/2] flex flex-col gap-5 " >

            <div className=" flex items-center justify-between gap-5" >
<h1 className="font-medium text-5xl text-[#FFFFFF] " >Coiton</h1>

<div className="flex items-center gap-3" >
    <button  className="flex items-center justify-center border-[1px] border-[#EBFFCB] p-[13px] rounded-[4px] "><FaEllipsis size={25}/> </button>
    <button  className="flex items-center justify-center border-[1px] border-[#EBFFCB] p-[13px] rounded-[4px] "><BsTwitterX size={25}/> </button>
</div>
            </div>

            </div>

          </div>


            </div>

        </section>
    )
}