import { ArgentWebWallet } from "@argent/invisible-sdk";





const argentWebWallet = ArgentWebWallet.init({
    environment: "sepolia",
    appName: "Weaver",
    sessionParams: {
      allowedMethods: [

        {
          contract:
            "0x036133c88c1954413150db74c26243e2af77170a4032934b275708d84ec5452f",
          selector: "increment",
        }
      ],
      validityDays: 30
    },
    paymasterParams: {
      apiKey: "avnu paymaster api key"
    }
  });


  export default argentWebWallet;