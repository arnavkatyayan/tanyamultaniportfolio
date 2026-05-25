import {
    HeartHandshake,
    Presentation,
    GraduationCap,
    BriefcaseBusiness,
    PenTool,
    MonitorSmartphone,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});
const skillsAndServices = [
    {
        id: 1,
        title: "Counselling",
        icon: HeartHandshake,

        tags: [
            "Career guidance",
            "REBT therapy",
            "Play therapy",
            "CWSN support",
        ],
    },

    {
        id: 2,
        title: "Training",
        icon: Presentation,

        tags: [
            "Soft skills",
            "Communication",
            "Employability",
            "Life skills",
        ],
    },

    {
        id: 3,
        title: "Special education",
        icon: GraduationCap,

        tags: [
            "Inclusive plans",
            "IDD diploma",
            "Behavioural support",
        ],
    },

    {
        id: 4,
        title: "Coordination",
        icon: BriefcaseBusiness,

        tags: [
            "Project mgmt",
            "Stakeholders",
            "Reporting",
        ],
    },

    {
        id: 5,
        title: "Creative writing",
        icon: PenTool,

        tags: [
            "Copywriting",
            "Novel writing",
            "Public speaking",
        ],
    },

    {
        id: 6,
        title: "Digital tools",
        icon: MonitorSmartphone,

        tags: [
            "MS Office",
            "MS Excel",
            "AI tools",
        ],
    },
];
export default function skills() {
    return (
        <section id="skills" className="w-full h-[750px] flex items-center relative bg-[#F9E8D9]">
            <div className="flex flex-col justify-center absolute top-10 left-10 gap-4 ">
                <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B] text-left`}>What I Offer</p>
                <p className={`${inter.className} text-[40px] font-bold text-black text-left`}>
                    Skills & Services
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsAndServices.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="bg-white border border-[#E7DDD6] rounded-3xl p-8 w-[500px]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#EFE5DF] flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-[#8B1A2B]" />
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold text-[#1C1917]">
                                    {item.title}
                                </h3>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-1 rounded-full border border-[#D9A89B] text-[#8B1A2B] text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    )
}