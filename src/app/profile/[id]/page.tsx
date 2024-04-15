
'use client'

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'


const UserProfile = ({ params }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);
    const getName = async () => {
        try {
            const response = await axios.get('/api/users/me');
            setName(response.data.data.username);
            setEmail(response.data.data.email);
            setVerified(response.data.data.isVerified);

        } catch (error) {
            console.log('Cant get name')
        }
    }
    useEffect(() => {
        getName();
    }, [name])

    return (
        <div className='bg-gray-200 flex flex-col gap-4 items-center justify-center h-[100vh]'>
            <div className='bg-white px-10 py-8 flex flex-col items-start justify-center rounded-lg shadow-md shadow-slate-400 gap-5'>
                <h1 className='text-slate-400 font-bold text-[18px] ml-8'>Welcome</h1>
                <div className='flex gap-6 items-center justify-start'>
                    <Image src='/boy.png' alt='profile' width={200} height={200} className=' w-36' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[2rem] font-bold text-slate-500 leading-8'>{name}</h1>
                        <h2 className='text-slate-400 font-semibold text-[1.2rem]'>{email}</h2>
                        <h2 className='text-slate-400 font-semibold text-[1.2rem]'> Id: #{params.id.substring(0, 3)}</h2>

                        {
                            verified ? <p className='text-[20px] font-bold text-green-500'>verified</p> : <p className='text-[20px] font-bold text-red-500'> Not verified</p>

                        }

                    </div>

                </div>


            </div>

        </div>
    )
}

export default UserProfile
