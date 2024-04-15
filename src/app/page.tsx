'use client'
import Image from "next/image";
import Link from "next/link";
import { Whisper } from "next/font/google";
import { Carter_One } from "next/font/google";

const carter = Carter_One({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const whisper = Whisper({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
export default function Home() {

    return (
        <div className=" max-w-[1400px] mx-auto">

            <div className="relative h-[100vh] flex items-center justify-evenly gap-4">
                <Link href='https://github.com/SnehansuBehera/Authentication-using-Nextjs' className="absolute top-[5rem] left-[6rem]">
                    <button className="px-6 py-3 bg-transparent rounded-md shadow-md shadow-slate-200 flex gap-2 justify-center items-center">
                        <Image src='/github.png' alt="codebase" width={200} height={200} className="w-6" />
                        <p className={carter.className}><span className="text-[1rem] text-slate-400">Codebase</span></p>
                    </button></Link>
                <div className="flex flex-col gap-3 items-start justify-center">
                    <h1 className={whisper.className}><span className="font-semibold text-[3rem] text-gray-400">Its an </span><span className="text-[3rem] font-mono font-bold text-[#44CE9E]"><span className={carter.className}> Authentication app</span></span></h1>


                    <p className="w-[35rem] text-slate-400 font-semibold leading-6 text-[1rem]">
                        This is a simple authentication service made with NEXTjs where a user can sign up using their credentials which includes his/her email and password further they can login to their dashboard. User can also change change their password using Forgot password.
                    </p>



                    <div className="flex items-center justify-center gap-8 my-6">
                        <Link className="py-3 px-6 bg-[#44CE9E] shadow-md shadow-slate-400 rounded-md font-bold text-white text-[1.2rem]" href='/signup'><span className={carter.className}>Sign Up</span></Link>
                        <Link className="py-3 px-6 rounded-md bg-transparent shadow-md shadow-slate-200 font-bold text-[#44CE9E] text-[1.2rem]" href='/profile'><span className={carter.className}>Profile</span></Link>
                    </div>

                </div>
                <Image src='/coolboy-Photoroom.png' alt="me" width={1000} height={1000} className="w-[35vw]" />


            </div>
        </div>


    );
}
