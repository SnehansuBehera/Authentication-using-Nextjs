
'use client'

import React from 'react'

const userProfile = ({ params }: any) => {
    return (
        <div className='bg-black flex flex-col gap-4 items-center justify-center h-[100vh]'>
            <h1 className='text-white'>Welcome</h1>
            <h2 className='text-white'>Profile id: <span className='p-2 rounded ml-2 bg-orange-600 text-black'>{params.id}</span></h2>
        </div>
    )
}

export default userProfile
