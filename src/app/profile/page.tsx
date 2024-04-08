'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const profilePage = () => {
    const route = useRouter()
    const logout = async () => {
        try {

            const res: any = await axios.get('/api/users/logout');
            console.log(res.message);
            route.push('/login')

        } catch (error: any) {
            console.log(error.message)
        }
    }


    return (
        <div className='bg-black text-center h-[100vh] flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-white'>Profile page</h1>
            <button
                onClick={logout}
                className='py-2 px-4 ring-1 ring-white text-white font-bold'
            >Logout</button>
        </div>
    )
}

export default profilePage
