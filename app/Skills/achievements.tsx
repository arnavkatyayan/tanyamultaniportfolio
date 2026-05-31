import {
    Trophy,
    Award,
    Mic,
    BookOpen,
} from "lucide-react";

const achievementsObj = [
    {
        id: 1,
        title: "1st Prize",
        description: "National Poetry Competition, Pune",
        icon: Trophy,
    },
    {
        id: 2,
        title: "2nd Prize",
        description: "National Debate Competition, Nashik",
        icon: Award,
    },
    {
        id: 3,
        title: "Army Auditorium Speaker",
        description: "Special education & cancer awareness",
        icon: Mic,
    },
    {
        id: 4,
        title: "Published Contributor",
        description: "College magazine publications",
        icon: BookOpen,
    },
];

export default function Achievements() {
    return (
        <section id="projects" className="w-full bg-[#2A2623] py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {achievementsObj.map((obj) => {
                    const Icon = obj.icon;
                    return (
                        <div key={obj.id} className="flex flex-col items-center gap-3 rounded-3xl bg-[#3B1118] p-6 shadow-lg">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#8B1A2B] bg-[#3B1118]">
                                <Icon className="w-6 h-6 text-[#B3263E]" />
                            </div>
                            <h3 className="text-white font-semibold">{obj.title}</h3>
                            <p className="text-gray-400 text-sm">{obj.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
} 