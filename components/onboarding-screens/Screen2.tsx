import Image from "next/image";

export default function OnboardScreen2() {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 md:pt-0 pt-48">
            <Image
                src="/weaverSpider.svg"
                alt="weaver-spider"
                height={267}
                width={255}
            />
            <Image
                src="/weaver.svg"
                alt="weaver-logo"
                height={100}
                width={100}
            />
        </div>
    );
}
