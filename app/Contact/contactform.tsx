export default function ContactForm() {
    return (
        <div className="w-full max-w-xl bg-[#EFE7E1] p-8 rounded-3xl shadow-lg absolute right-15 top-10">

            <h2 className="text-3xl font-bold text-[#1C1917] mb-6">
                Contact Me
            </h2>

            <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="flex flex-col gap-5"
            >

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#3B302C]"
                    >
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="px-4 py-3 rounded-xl border border-[#D8CBC3] outline-none focus:ring-2 focus:ring-[#8B1A2B]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#3B302C]"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="px-4 py-3 rounded-xl border border-[#D8CBC3] outline-none focus:ring-2 focus:ring-[#8B1A2B]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-[#3B302C]"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me a bit about what you're looking for..."
                        className="px-4 py-3 rounded-xl border border-[#D8CBC3] outline-none resize-none focus:ring-2 focus:ring-[#8B1A2B]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#8B1A2B] text-white py-3 rounded-xl font-medium hover:bg-[#701524] transition-all duration-300"
                >
                    Send Message
                </button>

            </form>
        </div>
    );
}