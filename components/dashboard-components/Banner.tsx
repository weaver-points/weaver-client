interface JoinBannerProps {
    date: string;
}

const Banner = ({ date }: JoinBannerProps) => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex space-x-3 items-center w-full">
                <img src="/users-avatar.png" alt="" />
                <p className="text-xl text-[#988C8C]">{date}</p>
            </div>
            <button className="bg-[#EBFFCB] text-[#70750B] w-[126px] py-2 rounded">
                Join
            </button>
        </div>
    );
};

export default Banner;
