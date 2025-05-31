interface IconBoxProps {
    icon: string;
    text: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
}
const IconBox = ({ icon, text }: IconBoxProps) => {
    return (
        <div className="flex flex-col items-center rounded-lg pt-1 space-y-1 px-5 pb-2 border w-full">
            <img src={icon} alt="" className="block" />
            <p className="text-center"> {text}</p>
        </div>
    );
};

export default IconBox;
