import Link from "next/link"
import Image from "next/image"
import SignInForm from "@/components/sign-in-form"
import FeatureList from "@/components/feature-list"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0f1218] text-white">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center p-10 max-w-md">
          <div className="mb-10">
            <Link href="/" className="flex items-center">
              <Image src="/sitemark-logo.svg" alt="Sitemark" width={150} height={40} className="h-10 w-auto" />
            </Link>
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
  )
}

