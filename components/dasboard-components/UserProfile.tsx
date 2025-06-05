import { useState } from "react";
import { Github, Send, Wallet, X, Copy, Pencil } from "lucide-react";

const UserProfile = () => {
    const [username, setUsername] = useState("Luciferess");
    const [email, setEmail] = useState("lulubae@gmail.com");
    const [editingField, setEditingField] = useState<string | null>(null);
    const [address] = useState("0x742d...f44e");

    return (
        <div className="bg-zinc-900 rounded-xl p-8 max-w-sm mx-auto mt-8 shadow-lg flex flex-col items-center">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center mb-4 text-5xl">
                <img
                    src="/assets/avatar.png"
                    alt="avatar"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            {/* Username */}
            <h2 className="text-xl font-semibold text-white mb-1">
                {username}
            </h2>
            {/* Social icons */}
            <div className="flex gap-4 mb-4 text-zinc-400">
                <Github size={20} className="hover:text-white cursor-pointer" />
                <Send size={20} className="hover:text-white cursor-pointer" />
                <Wallet size={20} className="hover:text-white cursor-pointer" />
                <X size={20} className="hover:text-white cursor-pointer" />
            </div>
            {/* Address row */}
            <div className="flex w-full gap-2 mb-4">
                <button className="flex-1 bg-lime-200 text-black rounded px-3 py-2 font-mono flex items-center justify-between text-sm">
                    {address}
                    <Copy size={16} className="ml-2" />
                </button>
                <button
                    className="flex-1 bg-zinc-800 text-zinc-400 rounded px-3 py-2 text-sm cursor-not-allowed"
                    disabled
                >
                    + Binding Address
                </button>
            </div>
            {/* Username field */}
            <div className="w-full mb-3">
                <label className="text-xs text-zinc-400">Username</label>
                <div className="relative mt-1">
                    <input
                        type="text"
                        value={username}
                        readOnly={editingField !== "username"}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition pr-8"
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                        onClick={() =>
                            setEditingField(
                                editingField === "username" ? null : "username"
                            )
                        }
                    >
                        <Pencil size={16} />
                    </button>
                </div>
            </div>
            {/* Email field */}
            <div className="w-full">
                <label className="text-xs text-zinc-400">Email address</label>
                <div className="relative mt-1">
                    <input
                        type="email"
                        value={email}
                        readOnly={editingField !== "email"}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition pr-8"
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                        onClick={() =>
                            setEditingField(
                                editingField === "email" ? null : "email"
                            )
                        }
                    >
                        <Pencil size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
