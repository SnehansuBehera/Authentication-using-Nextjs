'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');
    const setPassword = async () => {
        try {
            const response = await axios.post('/api/users/changePassword', { token, newPassword });
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const getToken = window.location.search.split('=')[1];
        setToken(getToken);
    })
    return (
        <div className='bg-black text-white flex flex-col justify-center items-center gap-5 h-[100vh]'>
            <input
                className='p-4 rounded-md text-black'
                type="password"
                value={newPassword}
                placeholder='New Password'
                id='password'
                onChange={(e) => {
                    setNewPassword(e.target.value)
                }}
            />
            <button onClick={setPassword} className='px-4 py-2 rounded-md bg-green-500 text-white'>Enter</button>
        </div>
    )
}

export default page
