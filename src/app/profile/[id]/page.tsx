
'use client'

import React from 'react'

const userProfile = ({ params }: any) => {
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Profile id: <span className='p-2 rounded ml-2 bg-orange-600 text-black'>{params.id}</span></h2>
        </div>
    )
}

export default userProfile
