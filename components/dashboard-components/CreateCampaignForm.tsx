import { useState } from "react";
import { Plus } from "lucide-react";

const CreateCampaignForm = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskInput, setTaskInput] = useState("");

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput.trim()]);
            setTaskInput("");
        }
    };

    return (
        <form className="bg-zinc-900 rounded-xl p-8 max-w-4xl mx-auto mt-8 shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">
                    New Campaign
                </h2>
                <button
                    type="submit"
                    className="bg-lime-200 text-black font-medium px-5 py-2 rounded shadow hover:bg-lime-300 transition"
                >
                    Create campaign
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <label className="text-sm text-white">
                        Name
                        <input
                            type="text"
                            className="mt-1 w-full bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition"
                        />
                    </label>
                    <label className="text-sm text-white">
                        Date
                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="date"
                                className="w-1/2 bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition"
                            />
                            <span className="text-zinc-400">to</span>
                            <input
                                type="date"
                                className="w-1/2 bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition"
                            />
                        </div>
                    </label>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="text-sm text-white">
                        Campaign description
                        <input
                            type="text"
                            className="mt-1 w-full bg-transparent border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition"
                        />
                    </label>
                    <label className="text-sm text-white">
                        Add tasks
                        <div className="flex mt-1">
                            <input
                                type="text"
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                className="flex-1 bg-transparent border border-zinc-600 rounded-l px-3 py-2 text-white focus:outline-none focus:border-lime-200 transition"
                                placeholder="Task description"
                            />
                            <button
                                type="button"
                                onClick={handleAddTask}
                                className="bg-lime-200 text-black px-4 rounded-r flex items-center justify-center hover:bg-lime-300 transition border border-lime-200 border-l-0"
                                aria-label="Add task"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        {/* Show added tasks */}
                        {tasks.length > 0 && (
                            <ul className="mt-2 space-y-1">
                                {tasks.map((task, idx) => (
                                    <li
                                        key={idx}
                                        className="text-xs text-lime-200 bg-zinc-800 rounded px-2 py-1 inline-block"
                                    >
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </label>
                </div>
            </div>
        </form>
    );
};

export default CreateCampaignForm;
