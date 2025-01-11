import Image from "next/image";

export default function OnboardScreen2() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <Image
        src="/weaverSpider.svg"
        alt="weaver-spider"
        height={267}
        width={255}
      />
      <Image src="/weaver-logo.svg" alt="weaver-logo" height={100} width={100} />
    </div>
  );
}
