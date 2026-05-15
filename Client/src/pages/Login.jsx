import React, { useState, useContext } from 'react'
import Logo from '../assets/Logo.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CarContext } from '../Context/CarContext'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { backendUrl, setToken, token } = useContext(CarContext)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        try {

            const response = await axios.post(
                `${backendUrl}/api/admin/login`,
                {
                    email,
                    password
                }
            )

            if (response.data.success) {

                // Save token
                setToken(response.data.token)

                localStorage.setItem(
                    "token",
                    response.data.token
                )

                navigate('/admin/dashboard')
            }
        } catch (error) {

            console.error(
                'Login failed:',
                error
            )
            alert(
                error.response?.data?.message ||
                "Login failed"
            )
        }
    }

    return (
        <div className="container w-full h-[80vh] flex flex-col bg-white items-center justify-center">
            <img src={Logo} alt="" className="w-50 h-50" />
            <form onSubmit={handleSubmit} className="w-100 h-95 bg-[#f0f0f0] flex flex-col p-5 items-center border-none rounded-2xl shadow-lg">
                <h1 className=" text-2xl font-bold text-gray-800 font-[Poppins]">
                    ADMIN LOGIN
                </h1>
                <div className="w-80 flex flex-col items-start mt-3">
                    <label htmlFor="email" className="text-gray-700 mt-5 mb-2">
                        Email
                    </label>
                    <input type="email" placeholder="Email" name="email" required className="p-3 w-80 mb-5 border border-gray-300 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password" className="text-gray-700 mb-2">
                        Password
                    </label>
                    <div className="flex items-center w-full border border-gray-300 rounded mb-5 overflow-hidden">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required className="p-3 w-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button
                            type="button" onClick={() => setShowPassword(!showPassword)} className="px-4 text-gray-500 cursor-pointer">
                            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-80 px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">
                        Login
                    </button>
                    <p className="text-gray-600 mt-3 text-center mx-auto text-xs">
                        © 2026 Yem Key.
                        All rights reserved.
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Login