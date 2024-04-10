'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const route = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');
    const setPassword = async () => {
        try {
            const response = await axios.post('/api/users/changePassword', { token, newPassword });
            console.log(response.data)
            route.push('/login')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const getToken = window.location.search.split('=')[1];
        setToken(getToken);
    })
    return (
        <div className='bg-[#E5E7EB] flex justify-center items-center h-[100vh]'>
            <div className='text-white flex flex-col gap-5 justify-start items-center px-6 py-6 bg-white rounded-md shadow-md shadow-gray-400'>
                <h1 className='text-gray-500 font-semibold text-[20px] w-full'>Hey! User</h1>
                <h2 className='text-gray-400 font-bold w-full'>Change your Password</h2>
                <div className='flex items-center justify-center gap-4'>
                    <input
                        className='px-5 py-3 rounded-md text-black bg-transparent shadow-sm shadow-gray-300'
                        type="password"
                        value={newPassword}
                        placeholder='New Password'
                        id='password'
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }}
                    />
                    <button onClick={setPassword} className='px-5 py-3 shadow-sm shadow-gray-500 rounded-md bg-green-500 text-white font-bold'>Enter</button>
                </div>

            </div>

        </div>
    )
}

export default page
