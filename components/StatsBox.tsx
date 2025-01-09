import Image from "next/image";






export default function StatsBox () {

    return(



        <div className="bg-[#121212] border-2 border-[#1D1D1D] w-full h-auto my-4 rounded-t-[10px] rounded-b-none px-10 py-5 max-h-[285.38] flex flex-col items-center justify-center " >
       
       <div>
        <span className="flex flex-row justify-center items-end gap-7 " > <h1 className="text-7xl" >259</h1>
        <Image src ="/tangler-badge.svg"
        alt=""
        width={100}
        height={100}
        className="w-[60.9px] h-[67.62px] object-contain "
        />
         </span>
       </div>











        </div>
    )


}