'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const ProfilePage = () => {
    const route = useRouter()
    const [userId, setUserId] = useState('');


    const logout = async () => {
        try {

            const res: any = await axios.get('/api/users/logout');
            console.log(res.message);
            route.push('/login')

        } catch (error: any) {
            console.log(error.message)
        }
    }
    const getUserDetails = async () => {
        try {
            const res2 = await axios.get('/api/users/me');
            setUserId(res2.data.data._id);


        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div className='bg-white text-center h-[100vh] flex flex-col items-center justify-center relative'>


            <button
                onClick={logout}
                className='py-4 px-6 rounded-md bg-transparent shadow-sm shadow-slate-500 text-gray-500 font-bold absolute top-[5rem] right-[10rem] flex gap-4'
            >
                <Image src='/next (1).png' alt='arrow' width={200} height={200} className=' w-6 rotate-180 hover:translate-x-[-10px] hover:delay-150 hover:duration-500' />
                <p>Logout</p>

            </button>


            <div className='bg-white px-10 py-8 flex flex-col items-start justify-center rounded-lg shadow-md shadow-slate-400 gap-5'>

                <div className='flex gap-8 items-center justify-start'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-slate-400 font-bold text-[18px]'>Welcome</h1>
                        <Image src='/insta.jpg' alt='profile' width={200} height={200} className='rounded-full w-32' />
                    </div>

                    <div className='flex flex-col gap-1 items-start justify-center mt-5'>
                        <h1 className='text-[2rem] font-bold text-slate-500 leading-8'>Snehansu Behera</h1>
                        <h2 className='text-slate-400 font-semibold text-[.95rem]'>IIIT KALYANI 2022-26</h2>
                        <h2 className='text-slate-400 font-semibold text-[.95rem]'>Fullstack Developer</h2>
                        <div className='flex gap-3 items-center justify-center mt-2'>
                            <Link href={'https://github.com/SnehansuBehera'}><Image src='/github.png' alt='myProfiles' width={200} height={200} className='w-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300' /></Link>
                            <Link href={'https://www.linkedin.com/in/snehansu-behera-314b17258/'}><Image src='/linkedin (4).png' alt='myProfiles' width={200} height={200} className='w-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300' /></Link>
                            <Link href={'https://twitter.com/SnehansuBehera1'}><Image src='/twitter.png' alt='myProfiles' width={200} height={200} className='w-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300' /></Link>
                            <Link href={'https://www.instagram.com/snehansu_08/'}><Image src='/instagram (1).png' alt='myProfiles' width={200} height={200} className='w-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300' /></Link>
                        </div>

                    </div>

                </div>
                <div className='flex items-center justify-start gap-4 ml-2'>
                    <p
                        onClick={getUserDetails}
                        className='text-black font-bold cursor-pointer'
                    >User Details</p>
                    <Image onClick={getUserDetails} src='/next (1).png' alt='arrow' width={200} height={200} className='w-6 animate-bounce' />
                </div>
                <h4 className='text-black'>{userId && (<Link className='flex items-center justify-start gap-5 text-black bg-transparent rounded-md shadow-sm shadow-slate-400 py-4 px-6 ' href={`/profile/${userId}`}>
                    <p>ID: #{userId}</p> <Image src='/next (1).png' alt='arrow' width={200} height={200} className=' w-6' />
                </Link>)}</h4>


            </div>

        </div>
    )
}

export default ProfilePage
