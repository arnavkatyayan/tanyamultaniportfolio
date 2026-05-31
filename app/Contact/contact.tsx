"use client"
import {
  Phone,
  Mail,
  MapPin,
  Briefcase
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import ContactForm from "./contactform";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});
export default function Contact() {
    const contactDetails = [
        {
            id: 1,
            icon: Phone,
            value: "95118921176",
        },
        {
            id: 2,
            icon: Mail,
            value: "multanitanya87@gmail.com",
        },
        {
            id: 3,
            icon: MapPin,
            value: "Ahilyanagar, Ahmednagar",
        },
        {
            id:4,
            icon: Briefcase,
            value:"https://www.linkedin.com/in/tanya-multani-000363214/"
        }
    ];

    return (
        <section id="contact" className="w-full bg-[#F9E8D9]">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.95fr,1.05fr] lg:px-8">
                <div className="flex flex-col gap-6">
                    <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B]`}>
                        GET IN TOUCH
                    </p>
                    <p className={`${inter.className} text-[32px] font-bold text-black leading-tight sm:text-[36px]`}>
                        Let&apos;s work together
                    </p>
                    <p className={`${inter.className} text-[15px] font-bold text-black leading-7`}>
                        Whether you need a soft skills trainer, a counsellor for your school or organisation, or someone to design and deliver a workshop — I&apos;d love to hear from you.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {contactDetails.map((contact) => {
                            const Icon = contact.icon;
                            return (
                                <div key={contact.id} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
                                    <Icon size={24} color="#8B1A2B" />
                                    <span className={`${inter.className} text-[15px] font-medium text-[#8B1A2B]`}>
                                        {contact.value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
} 