 "use client"
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import {useState} from "react";
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
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const contactDetails = [
        {
            id: 1,
            icon: Phone,
            value: "95118921176"
        },
        {
            id: 2,
            icon: Mail,
            value: "multanitanya87@gmail.com"
        },
        {
            id: 3,
            icon: MapPin,
            value: "Ahilyanagar, Ahmednagar"
        }
    ];

    return (
        <section id="contact" className="w-full h-[700px] flex items-center relative bg-[#F9E8D9] gap-10">
             <div className="flex flex-col justify-center absolute top-10 left-10 gap-4 max-w-[40%]">
                <p className={`${playfair.className} text-[20px] font-semibold text-[#8B1A2B] text-left`}>GET IN TOUCH</p>
                <p className={`${inter.className} text-[40px] font-bold text-black text-left`}>
                    Let's work together
                </p>
                <p className={`${inter.className} text-[15px] font-bold text-black text-left`}>
                    Whether you need a soft skills trainer, a counsellor for your school or organisation, or someone to design and deliver a workshop — I'd love to hear from you.
                </p>
                <div className="flex items-center gap-4 mt-4">
                    <Phone size={20} color="#8B1A2B" />
                    <span className={`${inter.className} text-[15px] font-medium text-[#8B1A2B]`}> {contactDetails[0].value} </span>
                </div>
                <div className="flex items-center gap-4">
                    <Mail size={20} color="#8B1A2B" />
                    <span className={`${inter.className} text-[15px] font-medium text-[#8B1A2B]`}> {contactDetails[1].value} </span>
                  </div>
                <div className="flex items-center gap-4">
                    <MapPin size={20} color="#8B1A2B" />
                    <span className={`${inter.className} text-[15px] font-medium text-[#8B1A2B]`}> {contactDetails[2].value} </span>  
                    </div>    
                </div>
                <ContactForm/>
        </section>
    )
}