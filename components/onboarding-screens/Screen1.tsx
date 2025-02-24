import Image from "next/image";

export default function OnboardScreen1() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 dark:bg-[#0D0D0D] dark:text-white">
      <p className="text-[16px]">
        <span className="font-thin font-satoshi">
          Lightweight
        </span>{" "}
        <span className="font-bold  ">
          {" "}
          on-chain identity platform
        </span>
      </p>
      <Image
        src="/first-group-image.svg"
        alt="group-img-for-screen1"
        height={128}
        width={280}
      />
      <Image src="/weaver.svg" alt="weaver-logo" height={100} width={100} />
    </div>
  );
}
