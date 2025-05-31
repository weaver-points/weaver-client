import IconBox from "../register/IconBox";
import InputBox from "../register/InputBox";

const RegisterProtocol = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex space-x-4 p-4">
                <div className="flex justify-center items-center">
                    <img src="/spider-web.svg" alt="" className="block" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Register Protocol</h1>
                    <div className="flex flex-col space-y-8 pl-4 pt-8">
                        <InputBox label="Protocol Name" inputType="text" />
                        <InputBox label="Protocol Overview" inputType="text" />
                        <div className="flex space-x-2">
                            <img src="/line.svg" alt="line" />
                            <p>OR</p>
                            <img src="/line.svg" alt="line" />
                        </div>
                        <div>
                            <p>Link Socials</p>
                            <div className="flex space-x-4">
                                <IconBox icon="/discord.svg" text="Discord" />
                                <IconBox icon="/twitter.svg" text="X" />
                                <IconBox icon="/github.svg" text="Github" />
                            </div>
                        </div>
                        <button
                            className="block mx-auto w-[80%] bg-[#E0FFB0] text-black py-4 rounded-lg"
                            onClick={() =>
                                (window.location.href = "/dashboard")
                            }
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterProtocol;
