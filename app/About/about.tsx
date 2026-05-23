"use client"
import { Playfair_Display, Inter } from "next/font/google";
import {
    HeartHandshake,
    PenSquare,
    GraduationCap,
} from "lucide-react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});
const aboutContent = {
    heading: "Turning potential into purpose — one person at a time",

    description1: `I’m a psychology-trained counsellor with a genuine passion for human development.Whether working with children with special needs, college students preparing for careers, or individuals navigating life transitions. I show up with empathy, expertise, and a structured approach.`,

    description2:
        "I also run CalmNest, my independent counselling practice, offering one-on-one therapy, play therapy, and teen guidance.",

    qualifications: [
        "M.A. Clinical Psychology — Ahmednagar College, 2023",
        "Diploma in Special Education (IDD) — 2025",
        "Certified REBT Therapist — Atha Counselling, Thane",
        "B.A. Psychology + English Literature",
    ],
};

const aboutCards = [
    {
        id: 1,
        title: "CalmNest — Founder & Counsellor",
        description:
            "Independent practice offering play therapy, REBT, and career counselling for parents, children, and CWSN.",
        icon: HeartHandshake,
    },

    {
        id: 2,
        title: "Published writer & national award winner",
        description:
            "Certified novel writer, creative copywriter, and 1st prize winner at National Poetry Competition, Pune.",
        icon: PenSquare,
    },

    {
        id: 3,
        title: "Special education & inclusion advocate",
        description:
            "Designed inclusive learning plans, lectured in Army Auditorium on special education, trained teachers on CWSN inclusion.",
        icon: GraduationCap,
    },
];
export default function About() {
    return (
        <section id="about" className="w-full bg-[#F9E8D9] h-[500px] flex items-center relative">
            <div className="flex flex-col justify-center absolute top-10 left-10 gap-4 max-w-[40%]">
                <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B] text-left`}>About Me</p>
                <p className={`${inter.className} text-[40px] font-bold text-black text-left`}>
                    Turning Potential into purpose - <br />one person at a time
                </p>
                <p className="text-[#6B3A2A] font-medium">{aboutContent.description1 + aboutContent.description2}</p>
                <ul className="flex flex-col gap-2 mt-2">
                    {aboutContent.qualifications.map((qualification) => (
                        <li key={qualification} className={`${inter.className} text-[15px] font-bold text-[#8B1A2B]`}>
                            {qualification}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center absolute top-10 right-10 gap-6 max-w-[40%]">
                {aboutCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.id}
                            className="bg-white border border-[#E8DFD8] rounded-3xl p-6 flex gap-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#EFE5DF] flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#8B1A2B]" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg text-[#1C1917]">
                                    {card.title}
                                </h3>

                                <p className="text-[#6B625D] text-sm leading-[1.8] mt-2">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}