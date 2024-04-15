import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(() => {
        if (typeof window !== 'undefined') {
            // Get the stored value from localStorage, parsing it to number
            const saved: any = localStorage.getItem('counter');
            const initialValue = JSON.parse(saved);
            return initialValue || 0;
        }
        return 0;
    });
    return (
        <div className="h-[100vh] flex flex-col items-center justify-evenly gap-4">
            <Link className="p-4 rounded-md border-2 border-gray-400" href='/signup'>Sign Up</Link>
            <Link className="p-4 rounded-md border-2 border-gray-400" href='/profile'>Profile</Link>
            <div className="flex gap-1 justify-start items-center">
                <p className="font-bold">Drop a heart if you love it </p>
                <Image src='/heart.png' alt="heart" width={200} height={200} className="w-6" />
                <p className="font-bold text-sky-500"> 10</p>
            </div>
        </div>

    );
}
