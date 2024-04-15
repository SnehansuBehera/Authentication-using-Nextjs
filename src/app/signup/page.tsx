"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async (e: any) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error: any) {
            console.log("Signup failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="h-[100vh] flex items-center bg-gray-200">
            <div className=" w-80 mx-auto  flex flex-col items-center justify-center py-10 rounded-xl shadow-md shadow-gray-400 bg-white">

                <h1 className="font-bold text-2xl mb-6 text-gray-600">Create your account</h1>


                <form
                    onSubmit={onSignup}
                    className="flex flex-col gap-1"
                >
                    <input
                        className="py-3 px-4 bg-transparent shadow shadow-gray-200 rounded-lg mb-4 focus:ring-1 focus:ring-inset focus:ring-gray-400 text-black"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => {
                            setUser({ ...user, username: e.target.value })

                        }}
                        placeholder="username"

                    />

                    <input
                        className="py-3 px-4 bg-transparent shadow shadow-gray-200  rounded-lg mb-4  focus:ring-1 focus:ring-inset focus:ring-gray-400 text-black"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })

                        }}
                        placeholder="email"

                    />

                    <input
                        className="py-3 px-4 bg-transparent shadow shadow-gray-200 rounded-lg mb-4 focus:ring-1 focus:ring-inset focus:ring-gray-400 text-black"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })

                        }}
                        placeholder="password"

                    />
                    {
                        buttonDisabled ? <button
                            disabled
                            className="p-2 rounded-lg mb-4 cursor-default bg-slate-400 text-slate-300">Sign up</button> : <button
                                onClick={onSignup}
                                className="p-2 rounded-lg mb-4 ring-1 ring-inset ring-lime-300 bg-green-400 text-white font-semibold">{loading ? 'Processing...' : 'Login'}</button>
                    }
                </form>





                <Link href="/login">Already have account? <span className="text-sky-400">Login</span></Link>
            </div>
        </div>

    )

}