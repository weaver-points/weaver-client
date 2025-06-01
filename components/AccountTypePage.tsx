"use client";
import Image from "next/image";
import React from "react";

interface AccountOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const AccountOption: React.FC<AccountOptionProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center rounded-xl border border-neutral-700 bg-neutral-900 space-x-8 transition hover:border-neutral-500"
    >
      <div className="flex p-8 h-24 max-w-24 items-center justify-center rounded-l-md text-lime-800 bg-[#eefdb6] dark:text-lime-900">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </button>
  );
};

interface AccountTypePageProps {
  onUserClick: () => void;
  onProtocolClick: () => void;
}

const AccountTypePage: React.FC<AccountTypePageProps> = ({
  onUserClick,
  onProtocolClick,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900 p-6 shadow-lg md:p-8">
        <h2 className="mb-8 text-xl font-semibold text-white md:text-2xl">
          Select your account type
        </h2>
        <div className="flex flex-col gap-8">
          <AccountOption
            icon={
              <Image src="/user.svg" alt="User Icon" width={55} height={55} />
            }
            title="User"
            description="Join campaigns, earn rewards and view campaign progress in real time."
            onClick={onUserClick}
          />
          <AccountOption
            icon={
              <Image
                src="/protocol.svg"
                alt="User Icon"
                width={55}
                height={55}
              />
            }
            title="Protocol"
            description="Create campaigns, build loyalty, and give out rewards to users."
            onClick={onProtocolClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountTypePage;
