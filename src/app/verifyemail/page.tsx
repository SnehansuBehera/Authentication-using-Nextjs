'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Verifyemail = () => {
    const [verified, setVerified] = useState(false);
    const [token, setToken] = useState("");
    const [error, setError] = useState(false);
    const getVerified = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const gettoken = window.location.search.split('=')[1];
        setToken(gettoken || '');
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            getVerified();
        }

    }, [token])

    return (
        <div className='flex flex-col items-center justify-center h-[100vh] bg-black text-white gap-5'>
            <h1 className='font-bold'>Verify Email</h1>
            <h2 className='font-bold'>{token ? `${token}` : 'No Token'}</h2>

            {
                verified && (
                    <div>
                        <h2 className='font-bold'>Email Verified</h2>
                        <br />
                        <Link className='text-sky-400 font-bold' href='/login'>Login</Link>
                    </div>

                )

            }
            {
                error && (
                    <div>
                        <h2 className='font-bold'>Not Verified</h2>
                    </div>

                )
            }
        </div>
    )
}

export default Verifyemail
