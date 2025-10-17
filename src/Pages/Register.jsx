import React, { useState } from 'react';
import MyContainer from '../Component/MyContainer';
import { Link } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Register = () => {


    const [showPassowrd, setShowPassword] = useState(false)



    const handleSignUp = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log('i am registerd with', email, password);


        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password)) {

            toast.error("Password must be at least 8 characters long and contain uppercase, lowercase, and number");
            return;
        }

        event.target.reset();


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Your account creare successfully')

            })

            .catch((error) => {
                console.log(error);
                console.log(error.code);

                if (error.code === 'auth/email-already-in-us') {
                    toast.error('user already axist in database')
                }
            })

    }



    const handleShowPassord = () => {
        setShowPassword(!showPassowrd)
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden'>

            {/* animated flowing cercaler */}

            <div className='absolute inset-0'>
                <div className='absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse'>
                </div>
                <div className='absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl bottom-10 right-/10 animate-pulse'>
                </div>
            </div>

            <MyContainer>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Create Your Account
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Join our community and unlock exclusive features. Your journey
                            begins here!
                        </p>
                    </div>
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                            Sign Up
                        </h2>
                        <form onSubmit={handleSignUp}>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>
                            <div className="relative" >
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={showPassowrd ? 'text' : 'password'}
                                    name="password"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <span
                                    onClick={handleShowPassord}
                                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                                >
                                    {showPassowrd ? <FaRegEye /> : <FaEyeSlash />}
                                </span>
                            </div>

                            <button type="submit" className="my-btn my-5">
                                Sign Up
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-pink-300 hover:text-white font-medium underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </MyContainer>
        </div>
    );
};

export default Register;