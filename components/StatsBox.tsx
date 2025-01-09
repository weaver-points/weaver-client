import Image from "next/image";






export default function StatsBox () {

    return(



        <div className="bg-[#121212] border-2 border-[#1D1D1D] w-full h-auto my-4 rounded-t-[10px] rounded-b-none px-10 py-5 max-h-[285.38] flex flex-col items-center justify-center " >
       
       <div className="flex flex-col items-center justify-center  w-4/5 gap-2" >

        <span className="flex flex-row justify-center items-end gap-7 " > <h1 className="text-7xl font-medium" >259</h1>
        <Image src ="/tangler-badge.svg"
        alt=""
        width={100}
        height={100}
        className="w-[60.9px] h-[67.62px] object-contain "
        />
         </span>

         <div className="border-t border-[#636363] w-full flex justify-between items-center py-2 px-4 text-xs text-[#BDBDBD] font-medium    ">
            <p>
               <span className="text-[#808080] mr-1  font-light " >Balance:</span> $200.10 USDT
            </p>


            <p>
                <span className="text-[#808080] font-light mr-3 ">Rank: </span>  <span className="text-[#808080] font-light "> 30/</span>50
            </p>
         </div>
       </div>











        </div>
    )


}