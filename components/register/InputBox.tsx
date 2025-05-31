interface InputBoxProps {
    label: string;
    inputType: string;
    placeholder?: string;
    classStyle?: string;
    size?: number;
}

const InputBox = ({
    label,
    inputType,
    placeholder,
    classStyle,
    size,
}: InputBoxProps) => {
    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType}
                name={label}
                placeholder={placeholder}
                className={
                    "w-full p-2 border border-[#988C8C] rounded-xl" + classStyle
                }
                size={size}
            />
        </div>
    );
};

export default InputBox;
