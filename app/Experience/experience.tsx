"use-client"
import { Playfair_Display, Inter } from "next/font/google";
import { Briefcase, Calendar } from "lucide-react";
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
        <section id="experience" className="w-full h-[700px] flex items-center relative border-b-1 border-[#8B1A2B]">
            <div className="flex flex-col justify-center absolute top-10 left-10 gap-4 ">
                <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B] text-left`}>Career Journey</p>
                <p className={`${inter.className} text-[40px] font-bold text-black text-left`}>
                    Where I have made an impact !
                </p>
                <div className="grid grid-cols-2 gap-5 ml-[200px]">
                    {
                        careerJourney.map((item) => (
                            <div className="flex flex-col items-center gap-2 border-l-4 border-[#8B1A2B] shadow-md p-6 rounded-2xl max-w-[550px]" key={item.id}>
                                <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B]`}>
                                    {item.role}
                                </p>
                                <p className={`${inter.className} text-[15px] font-normal text-black`}>
                                    {item.organization}
                                </p>
                                <p className={`${inter.className} text-[15px] font-normal text-black`}>
                                    {item.duration}
                                </p>
                                <p className={`${inter.className} text-[15px] font-normal text-black`}>
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}