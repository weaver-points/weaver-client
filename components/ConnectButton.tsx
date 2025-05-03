"use client"

import argentWebWallet from "@/utils/argentWallet";
import { useState } from "react";






export default function ConnectButton() {

    const [account, setAccount] = useState(null);


    const handleConnect = async () => {
        try {
            const response = await argentWebWallet.requestConnection({
                callbackData: "custom_callback_data",
                approvalRequests: [
                    {
                        tokenAddress: "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",
                        amount: BigInt("100000000000000000").toString(),

                        spender: "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a",
                    },
                ],
            });
            const { account: sessionAccount } = response
            setAccount(sessionAccount);

        } catch (err) {
            console.error(err);
        }
    };


    const handleDisconnect = () => {
        setAccount(null);
        console.log("Disconnected from Argent Web Wallet");
    };

    const isConnected = !!account;







    return (

        <div>  {isConnected ? (<button onClick={handleDisconnect} className=" py-2 px-4 bg-[#787272] " > Disconnet wallet </button>) : (<button onClick={handleConnect} className=" py-2 px-4 bg-[#787272] " > Connect wallet </button>)}  </div>

    )
}