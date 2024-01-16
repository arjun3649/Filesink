"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 import { useUser } from "@clerk/nextjs";


export default function Home() {
  const { user } = useUser();
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800 ">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-2xl font-bold md:text-5xl">
            Welcome to Filesink. <br />
            <br />
            Storing everything for you and your business needs. All in one
            place.
          </h1>
          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convinience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit text-lg">
            { user ? "Dashboard" : "Try it for Free"}
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This app is made from a video meant for informational and educational
        purposes only. We do not own or affiliate with Dropbox or/and any of its
        subsidiaries in any form. Copyright Disclaimer under section 107 of the
        Copyright Act 1976, allowance is made for "fair use" of this video for
        education purposes only.
      </p>
    </main>
  );
}
