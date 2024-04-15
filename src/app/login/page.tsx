"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [mailed, setMailed] = useState(false);

    const onLogin = async (e: any) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            router.push("/profile");

        } catch (error: any) {
            console.log("Login failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    const onForgotPass = async () => {
        try {
            setMailed(true);
            console.log(user.email);
            await axios.post("/api/users/forgotPassword", [user.email]);
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="h-[100vh] flex items-center bg-gray-200">
            <div className=" w-80 mx-auto  flex flex-col items-center justify-center py-10 rounded-xl shadow-md shadow-gray-400 bg-white">

                <h1 className="font-bold text-2xl mb-6 text-gray-600">Welcome back!</h1>


                <form
                    onSubmit={onLogin}
                    className="flex flex-col gap-1"
                >

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
                    <p onClick={onForgotPass} className="text-[.8rem] text-sky-500 mb-3 cursor-pointer">Forgot Password</p>
                    {
                        buttonDisabled ? <button
                            disabled
                            className="p-2 rounded-lg mb-4 cursor-default bg-slate-400 text-slate-300">Login</button> : <button
                                onClick={onLogin}
                                className="p-2 rounded-lg mb-4 ring-1 ring-inset ring-lime-300 bg-green-400 text-white font-semibold">{loading ? 'Processing...' : 'Login'}</button>
                    }
                </form>





                <Link href="/signup">Dont have account? <span className="text-sky-400">Sign up</span></Link>

                {
                    mailed && (
                        <p className="mt-5 text-slate-400 font-semibold">Verification mail is sent to you</p>
                    )
                }
            </div>
        </div>

    )

}