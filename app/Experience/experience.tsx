"use client"
import { Playfair_Display, Inter } from "next/font/google";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});
export const careerJourney = [
    {
        id: 1,
        role: "Soft Skills Trainer & Employability Practitioner",
        organization: "TNS India Foundation",
        duration: "2024-present",
        description:
            "Trained 300+ students in employability skills. Conducted individual career counselling and supported campus placements. Represented TNS at Crompton's CSR Meet, Lonavala.",
    },
    {
        id: 2,
        role: "Project Coordinator",
        organization: "Aarambh Palliative Cancer Care Centre",
        duration: "2020-23",
        description:
            "Led interdisciplinary teams across care programmes. Organised seminars, webinars, patient home visits, and counselling sessions.",
    },
    {
        id: 3,
        role: "Counsellor",
        organization: "Army Public School",
        duration: "2023-24",
        description:
            "Counselled students and teachers on academic and emotional concerns. Designed inclusive learning plans for CWSN. Delivered life skills sessions.",
    },
    {
        id: 4,
        role: "Soft Skills Trainer & Language Teacher",
        organization: "Prominent Institute",
        duration: "2018-19",
        description:
            "Created activity-based learning modules. Delivered personality development and English communication training to improve student confidence and employability.",
    },
];
export default function Experience() {
    return (
        <section id="experience" className="w-full bg-white border-b border-[#8B1A2B]">
            <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
                <div className="max-w-2xl">
                    <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B]`}>
                        Career Journey
                    </p>
                    <p className={`${inter.className} text-[32px] font-bold text-black leading-tight sm:text-[36px]`}>
                        Where I have made an impact!
                    </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {careerJourney.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col gap-3 rounded-2xl border-l-4 border-[#8B1A2B] bg-[#FCF7F4] p-6 shadow-sm"
                        >
                            <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B]`}>
                                {item.role}
                            </p>
                            <p className={`${inter.className} text-[15px] font-normal text-black`}>
                                {item.organization}
                            </p>
                            <p className={`${inter.className} text-[15px] font-normal text-black`}>
                                {item.duration}
                            </p>
                            <p className={`${inter.className} text-[15px] font-normal text-black leading-7`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 