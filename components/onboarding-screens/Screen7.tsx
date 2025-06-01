"use client";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/components/ThemeContext";

type UseCase = "individual" | "organization" | null;

function OnboardScreen6() {
    const [selectedUseCase, setSelectedUseCase] = useState<UseCase>(null);
    const { theme } = useTheme();

    const handleSelection = (useCase: UseCase) => {
        setSelectedUseCase(useCase);
    };

    return (
        <div className="font-satoshi min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-col md:flex-row md:items-center md:justify-between px-16 lg:pl-6 lg:pr-24 lg:gap-5 md:border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
            <img
                src="/RegisterUser.svg"
                alt="group-img-for-screen1"
                className="w-[450px] md:h-[552px] h-[300px] object-contain block self-end -ml-6"
            />

            <div className="w-full min-w-[200px] max-w-[335px] md:w-[17.43vw] min-h-[280px] max-md:min-h-[280px] flex flex-col items-center justify-between text-center">
                <p className="flex md:flex-col flex-row items-center md:justify-center space-x-1 text-xl lg:text-[28px]">
                    What will you be using weaver for ?
                </p>
                <div className="flex md:flex-row flex-col gap-4 mb-2 lg:my-8 w-full justify-center">
                    {/* Individual Button */}
                    <button
                        className={`md:w-36 w-full md:px-4 px-2 md:py-7 py-5 rounded-lg border transition-all duration-300 flex flex-col items-center justify-center ${
                            selectedUseCase === "individual"
                                ? "border-[#8BB151] bg-[#EDFFD0] bg-opacity-10"
                                : "border-[#414141] hover:border-[#8BB151]"
                        }`}
                        onClick={() => setSelectedUseCase("individual")}
                    >
                        <Image
                            src="/Individual.svg"
                            alt="img"
                            height={100}
                            width={100}
                            className="w-6 h-6 mb-2"
                        />

                        <span
                            className={`text-sm font-normal${
                                theme === "dark"
                                    ? "text-[#EDFFD0] "
                                    : "text-[#0D0D0D] "
                            }`}
                        >
                            Individual
                        </span>
                    </button>

                    {/* Organization Button */}
                    <button
                        className={`md:w-36 w-full md:px-4 px-2 md:py-7 py-5 rounded-lg border transition-all duration-300 flex flex-col items-center justify-center ${
                            selectedUseCase === "organization"
                                ? "border-[#8BB151] bg-[#EDFFD0] bg-opacity-10"
                                : "border-[#414141] hover:border-[#8BB151]"
                        }`}
                        onClick={() => setSelectedUseCase("organization")}
                    >
                        <Image
                            src="/Organization.svg"
                            alt="img"
                            height={100}
                            width={100}
                            className="w-6 h-6 mb-2"
                        />
                        <span
                            className={`text-sm font-normal${
                                theme === "dark"
                                    ? "text-[#EDFFD0] "
                                    : "text-[#0D0D0D] "
                            }`}
                        >
                            Organization
                        </span>
                    </button>
                </div>
                <button
                    className={`w-full bg-[#EDFFD0] py-3 text-center mb-3 text-base font-medium rounded-[8px] transform transition duration-300 hover:scale-[1.1] ${
                        selectedUseCase
                            ? "text-[#0D0D0D] hover:scale-[1.02]"
                            : "text-[#0D0D0D] opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!selectedUseCase}
                >
                    Let's get it 🚀
                </button>
            </div>
        </div>
    );
}

export default OnboardScreen6;
