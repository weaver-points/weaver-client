import Image from "next/image";

export default function OnboardScreen2() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <Image
        src="/weaver-spider.webp"
        alt="weaver-spider"
        height={300}
        width={300}
      />
      <Image src="/weaver.webp" alt="weaver-logo" height={100} width={100} />
    </div>
  );
}
