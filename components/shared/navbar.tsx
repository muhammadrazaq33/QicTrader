import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[white] sm:pt-6 pt-4 sm:pb-0 pb-4 h-[90px]">
      <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="My sample photo"
            width={200}
            height={200}
            className="sm:ml-0 ml-[-12px]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end leading-tight">
            <span className="sm:text-[15px] text-[13px] text-[#7C828F]">
              Balance
            </span>
            <span
              className="sm:text-[16px] text-[13px] font-bold text-[#194F73]
"
            >
              19,885.98 ZAR
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1b6fa4] text-white grid place-items-center">
            R
          </div>
        </div>
      </div>
    </header>
  );
}
