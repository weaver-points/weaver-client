import Image from "next/image";

export default function OnboardScreen4() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <p className="text-base" >
        <span className="font-thin  text-gray-300">Lightweight</span>{" "}
        <span className="font-bold text-white "> on-chain identity platform</span>
      </p>
      <Image
        src="/first-group-image.svg"
        alt="group-img-for-screen1"
        height={128}
        width={280}
      />
      <Image src="/weaver.webp" alt="weaver-logo" height={100} width={100} />
    </div>
  );
}
