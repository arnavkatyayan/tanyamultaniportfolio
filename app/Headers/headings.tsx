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
        description: "Years of Experience",
    },
    {
        id: 2,
        no: "300+",
        description: "Students Mentored",
    },
    {
        id: 3,
        no: "4",
        description: "Organisations Worked With",
    },
];
const linkedInProfile = {
    label: "LinkedIn Profile",
    value: "https://www.linkedin.com/in/tanya-multani-000363214/",
};
const handleLinkedIn = () => {
    window.open(linkedInProfile.value, "_blank");
};
export default function Headings() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <header className="w-full bg-[#1C1917] text-[#FAF6F0]">
                <div className="mx-auto flex flex-col items-center gap-4 px-4 py-4 md:flex-row md:justify-between md:px-8">
                    <h3 className="font-bold text-lg">Tanya Multani</h3>

                    <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-8">
                        <a
                            href="#about"
                            onClick={handleScroll}
                            className="text-[14px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            About
                        </a>

                        <Link
                            href="/experience"
                            className="text-[14px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Experience
                        </Link>

                        <Link
                            href="/skills"
                            className="text-[14px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Skills
                        </Link>

                        <Link
                            href="/projects"
                            className="text-[14px] font-medium font-['Inter'] hover:text-slate-300 transition-colors duration-300"
                        >
                            Projects
                        </Link>
                    </nav>

                    <button className="w-full rounded-md bg-[#8B1A2B] px-5 py-2 text-sm font-medium text-[#FAF6F0] transition-all duration-300 hover:bg-[#701524] md:w-auto">
                        Let&apos;s Connect
                    </button>
                </div>
            </header>

            <header className="w-full bg-[#2A2623] text-[#FAF6F0]">
                <div className="mx-auto flex min-h-[760px] flex-col items-center justify-center gap-10 px-4 py-10 md:px-8 lg:flex-row lg:gap-14 lg:py-16 xl:max-w-[1200px]">
                    <div className="flex w-full max-w-2xl flex-col items-center gap-7 text-center lg:items-start lg:text-left">
                        <div className="rounded-full bg-[#8B1A2B] px-4 py-2 text-sm font-medium text-[#FAF6F0]">
                            Available for opportunities
                        </div>

                        <div className={`${playfair.className} text-[32px] font-semibold leading-tight text-[#FAF6F0] sm:text-[38px] md:text-[46px]`}>
                            Tanya Kumar Multani
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 text-[15px] italic font-normal text-[#8B1A2B] sm:justify-center lg:justify-start">
                            <p>Counsellor</p>
                            <span>|</span>
                            <p>Soft Skills trainer</p>
                            <span>|</span>
                            <p>Special Educator</p>
                        </div>

                        <p className={`${inter.className} max-w-2xl text-[15px] leading-7 italic font-normal text-[#FAF6F0]`}>
                            Helping individuals unlock their potential and achieve personal growth through counseling, soft skills training, and special education.
                        </p>

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                            <button className="w-full rounded-md bg-[#8B1A2B] px-5 py-2 text-sm font-medium text-[#FAF6F0] transition-all duration-300 hover:bg-[#701524] sm:w-auto">
                                Download Resume
                            </button>
                            <button className="w-full rounded-md border border-gray-500 px-5 py-2 text-sm font-medium text-[#FAF6F0] transition-all duration-300 hover:border-gray-700 sm:w-auto">
                                View Resume
                            </button>
                        </div>

                        <div className="mx-3 flex flex-wrap justify-center gap-4 sm:justify-start">
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

                    <div className="flex w-full max-w-[520px] flex-col items-center justify-center gap-7 rounded-2xl bg-[#35312E] p-6 md:p-8">
                        <div className="flex w-full flex-col items-center gap-3">
                            <Image
                                src="/Tanya.jpeg"
                                alt="Tanya Multani"
                                width={300}
                                height={300}
                                className="rounded-full border-2 outline-2 outline-[#8B1A2B] object-cover w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] shadow-xl"
                            />
                            <div className={`${playfair.className} text-[18px] font-semibold text-[#FAF6F0] text-center`}> 
                                Tanya Kumar Multani
                                <p className={`${inter.className} text-[13px] italic font-normal text-[#8B1A2B] mt-1`}>
                                    Ahilyanagar, Maharashtra
                                </p>
                            </div>
                        </div>
                        <div className="w-full rounded-3xl bg-[#2A2623] p-4">
                            <div className={`${playfair.className} text-[14px] font-semibold text-[#FAF6F0] text-left`}>
                                multanitanya87@gmail.com
                            </div>
                            <div className={`${playfair.className} text-[14px] font-semibold text-[#FAF6F0] text-left mt-2`}>
                                9511892176
                            </div>
                            <div
                                className={`${playfair.className} text-[14px] font-semibold text-[#8B1A2B] text-left hover:cursor-pointer hover:text-[#FAF6F0] transition-colors duration-300 mt-3`}
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