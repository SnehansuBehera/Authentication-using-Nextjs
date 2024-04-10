'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const profilePage = () => {
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
        <div className='bg-black text-center h-[100vh] flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-white'>Profile page</h1>
            <h4 className='text-white'>{userId == '' ? 'No user' : <Link className='text-black bg-white py-2 px-4' href={`/profile/${userId}`}>{userId}</Link>}</h4>
            <button
                onClick={logout}
                className='py-2 px-4 ring-1 ring-white text-white font-bold'
            >Logout</button>
            <button
                onClick={getUserDetails}
                className='py-2 px-4 ring-1 ring-white text-white font-bold'
            >User Details</button>
        </div>
    )
}

export default profilePage
