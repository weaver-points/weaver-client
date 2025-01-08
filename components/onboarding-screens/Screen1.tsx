import Image from "next/image";

export default function OnboardScreen1() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <p>
        <span className="font-thin text-gray-300">Lightweight</span>{" "}
        <span className="font-bold"> on-chain identity platform</span>
      </p>
      <Image
        src="/first-group-image.webp"
        alt="group-img-for-screen1"
        height={300}
        width={300}
      />
      <Image src="/weaver.webp" alt="weaver-logo" height={100} width={100} />
    </div>
  );
}
