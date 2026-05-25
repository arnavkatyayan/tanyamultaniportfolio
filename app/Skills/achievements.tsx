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
        <section className="w-full h-[200px] bg-[#2A2623]">
            <div className="flex items-center justify-center gap-10 h-full">

                {achievementsObj.map((obj) => {

                    const Icon = obj.icon;

                    return (
                        <div
                            key={obj.id}
                            className="flex flex-col items-center"
                        >

                            <div className="w-14 h-14 border border-[#8B1A2B] rounded-xl flex items-center justify-center bg-[#3B1118]">
                                <Icon className="text-[#B3263E] w-6 h-6" />
                            </div>

                            <h3 className="text-white font-semibold mt-3">
                                {obj.title}
                            </h3>

                            <p className="text-gray-400 text-sm text-center">
                                {obj.description}
                            </p>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}