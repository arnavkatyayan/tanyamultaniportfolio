"use client"
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});
const achievements = [
    {
        id: 1,
        no: "6+",
        description: "Years of Experience"
    },
    {
        id: 2,
        no: "300+",
        description: "Students Mentored"
    },
    {
        id: 3,
        no: "4",
        description: "Organsations Worked With"
    },

]
const linkedInProfile = {
    label: "LinkedIn Profile",
    value: "https://www.linkedin.com/in/tanya-multani-000363214/"
}
const handleLinkedIn = () => {
    window.open(linkedInProfile.value, "_blank");
}
export default function Headings() {
    return (
        <>
            <header className="w-full h-13 bg-[#1C1917] text-[#FAF6F0]">
                <div className="flex items-center justify-around py-2.5">
                    <h3 className="font-bold">
                        Tanya Multani
                    </h3>
                    <nav className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-[15px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Home
                        </Link>

                        <Link
                            href="/experience"
                            className="text-[15px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Experience
                        </Link>

                        <Link
                            href="/skills"
                            className="text-[15px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Skills
                        </Link>

                        <Link
                            href="/projects"
                            className="text-[15px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Projects
                        </Link>
                    </nav>
                    <button className="px-5 py-1 bg-[#8B1A2B] text-[#FAF6F0] rounded-md font-medium font-['Inter'] hover:bg-[#701524] transition-all duration-300 cursor-pointer">
                        Let's Connect
                    </button>
                </div>


            </header>
            <header className="w-full h-[500px] bg-[#2A2623] text-[#FAF6F0]">
                <div className="flex justify-center items-center gap-20">
                    <div className="flex flex-col items-center justify-center h-full px-8 py-8 gap-7">
                        <div className="rounded-full bg-[#8B1A2B] text-[#FAF6F0] font-medium w-[200px] px-2 ">
                            Available for opportunities
                        </div>
                        {/* <div className="text-4xl text-[#FAF6F0] font-bold text-center">
                     Tanya Kumar Multani
                   </div> */}
                        <div
                            className={`${playfair.className} text-[40px] font-semibold text-[#FAF6F0] text-center`}
                        >
                            Tanya Kumar Multani
                        </div>
                        <div className="flex gap-2.5">
                            <p className={`${inter.className} text-[15px] italic font-normal text-[#8B1A2B]`}>
                                Counsellor
                            </p>
                            <p className={`${inter.className} text-[15px] italic font-normal text-[#8B1A2B]`}>
                                | Soft Skills trainer
                            </p>
                            <p className={`${inter.className} text-[15px] italic font-normal text-[#8B1A2B]`}>
                                | Special Educator
                            </p>
                        </div>

                        <p
                            className={`${inter.className} text-[15px] leading-[1.8] italic font-normal text-[#FAF6F0] text-center`}
                        >
                            Helping individuals unlock their potential and achieve personal growth<br />
                            through counseling, soft skills training, and special education.
                        </p>
                        <div className="flex gap-2">
                            <button className="px-5 py-1 bg-[#8B1A2B] text-[#FAF6F0] rounded-md font-medium font-['Inter'] hover:bg-[#701524] transition-all duration-300 cursor-pointer">
                                Download Resume
                            </button>
                            <button className="px-5 py-1 text-[#FAF6F0] border-gray-500 border rounded-md font-medium font-['Inter'] hover:border-gray-700 transition-all duration-300 cursor-pointer">
                                View Resume
                            </button>
                        </div>
                        <div className="mx-3 flex gap-6">
                            {achievements.map((achievement) => (
                                <div key={achievement.id} className="flex flex-col items-center gap-1">
                                    <p className={`${playfair.className} text-[24px] font-semibold text-[#FAF6F0]`}>
                                        {achievement.no}
                                    </p>
                                    <p className={`${inter.className} text-[15px] font-normal text-[#FAF6F0]`}>
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full px-8 py-8 gap-7">
                        <div className="w-[400px] h-[400px] rounded-2xl bg-[#35312E] px-3 py-3 flex flex-col gap-3">
                            <Image
                                src="/Tanya.jpeg"
                                alt="Tanya Multani"
                                width={300}
                                height={300}
                                className="rounded-full
                                border-2
                                outline
                                outline-2
                                outline-[#8B1A2B]
                                object-cover
                                w-[180px]
                                h-[180px]
                                shadow-xl"
                            />
                            <div
                                className={`${playfair.className} text-[18px] font-semibold text-[#FAF6F0] text-left`}
                            >
                                Tanya Kumar Multani
                                <p className={`${inter.className} text-[13px] italic font-normal text-[#8B1A2B] mx-3`}>
                                    Ahilyanagar, Maharashtra
                                </p>
                            </div>
                            <hr></hr>
                            <div
                                className={`${playfair.className} text-[13px] font-semibold text-[#FAF6F0] text-left`}
                            >
                                multanitanya87@gmail.com
                            </div>
                            <div
                                className={`${playfair.className} text-[13px] font-semibold text-[#FAF6F0] text-left`}
                            >
                                9511892176
                            </div>
                            <div
                                className={`${playfair.className} text-[13px] font-semibold text-[#8B1A2B] text-left hover:cursor-pointer hover:text-[#FAF6F0] transition-colors duration-300`}
                                onClick={handleLinkedIn}
                            >
                                {linkedInProfile.label}
                            </div>
                        </div>


                    </div>
                </div>
            </header>
        </>
    );
}