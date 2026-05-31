export default function Footer() {
    return (
        <footer className="w-full bg-[#2A2623] text-[#FAF6F0]">
            <div className="flex flex-col items-center justify-center py-5">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6F0] flex items-center justify-center border border-[#8B1A2B] outline-2">
                        <span className="text-[#8B1A2B] font-bold text-sm tracking-wide">
                            TM
                        </span>
                    </div>

                    <h4 className="font-bold opacity-90">
                        Tanya Multani
                    </h4>
                </div>

                <p className="mt-2 opacity-90">
                    © 2026 Tanya Multani. All rights reserved.
                </p>

                <p className="text-xs text-gray-400 mt-1">
                    Designed & Developed by{" "}
                    <span className="text-gray-200 font-medium">
                        Arnav Katyayan
                    </span>
                </p>

            </div>
        </footer>
    );
}