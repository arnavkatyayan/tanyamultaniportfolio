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
        <section id="skills" className="w-full bg-[#F9E8D9] border-b border-[#8B1A2B]">
            <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
                <div className="max-w-2xl">
                    <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B]`}>
                        What I Offer
                    </p>
                    <p className={`${inter.className} text-[32px] font-bold text-black leading-tight sm:text-[36px]`}>
                        Skills & Services
                    </p>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillsAndServices.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="w-full rounded-3xl border border-[#E7DDD6] bg-white p-6 shadow-sm sm:p-8"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#EFE5DF] flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-[#8B1A2B]" />
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold text-[#1C1917]">
                                    {item.title}
                                </h3>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-[#D9A89B] bg-[#FCF7F4] px-4 py-1 text-sm text-[#8B1A2B]"
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
    );
} 