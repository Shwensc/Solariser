import Link from "next/link";
import Image from "next/image";
import SignInForm from "@/components/sign-in-form";
import FeatureList from "@/components/feature-list";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0f1218] text-white">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center p-10 max-w-md">
          <div className="mb-10 flex items-center space-x-3">
            {/* Small Image beside the title */}
            <Image src="/sunny.jpg" alt="Solar Icon" width={50} height={50} className="object-contain" />
            
            {/* Italic, big "Solariser" text */}
            <h1 className="text-6xl italic font-bold">Solariser</h1>
          </div>
          <FeatureList />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg border border-gray-800 bg-[#0f1218]">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
