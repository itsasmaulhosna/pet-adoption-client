
'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLock,
} from 'react-icons/fa';

const Loginpage = () => {

  const [isShow, setShow] = useState(false);

  const {
    register,
    
    formState: { errors }
  } = useForm();
const handleGoogleSignIn =async()=>{
      await authClient.signIn.social({
          provider:'google'
      })
    }
  const onSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());
      
  
       const { data, error } = await authClient.signIn.email({
         email: user.email,
         password: user.password,
         
  
  
       });
       console.log({data,error})
  
       if (data) {
        toast.success("Login Successful 🐾");
         redirect('/');
       }
  
       if (error) {
        toast.error(error.message || "Login Failed");
         
       }
    };


  return (

    <div
      className="
      min-h-screen
      flex items-center justify-center
      px-4 py-10
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-cyan-100

      dark:from-[#06142E]
      dark:via-[#0B1F3A]
      dark:to-[#10254A]
      transition-all duration-500
      "
    >

      {/* LOGIN CARD */}
      <div
        className="
        w-full max-w-md
        rounded-3xl
        bg-white/90 dark:bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
        p-8
        "
      >

        {/* TOP ICON */}
        <div className="flex justify-center mb-5">

          <div
            className="
            w-20 h-20 rounded-full
            flex items-center justify-center
            bg-gradient-to-r
            from-cyan-500
            via-blue-600
            to-indigo-700
            text-white text-3xl
            shadow-lg
            "
          >
            <FaLock />
          </div>

        </div>

        {/* HEADING */}
        <h2
          className="
          text-3xl font-extrabold text-center
          text-gray-800 dark:text-white
          "
        >
          Welcome Back
        </h2>

        <p
          className="
          text-center mt-2 mb-6
          text-gray-500 dark:text-gray-300
          "
        >
          Login to continue to PetNest 🐾
        </p>

        {/* GOOGLE BUTTON */}
        <button onClick={handleGoogleSignIn}
          className="
          flex items-center justify-center gap-3
          w-full py-3 rounded-xl
          border border-gray-200 dark:border-white/10
          bg-white dark:bg-white/5
          hover:bg-gray-100 dark:hover:bg-white/10
          transition-all duration-300
          font-semibold
          text-blue-500
          "
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-white/10"></div>

          <p className="text-sm text-gray-400">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-white/10"></div>

        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className='space-y-5' >

          {/* EMAIL */}
          <fieldset>

            <legend
              className="
              mb-2 font-medium
              text-gray-700 dark:text-gray-200
              "
            >
              Email Address
            </legend>

            <input
              type="email"
              className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 dark:border-white/10
              bg-white dark:bg-white/5
              text-gray-800 dark:text-white
              outline-none
              focus:ring-2 focus:ring-cyan-500
              "
              {...register("email", {
                required: 'Email is required'
              })}
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className='text-red-500 mt-1 text-sm'>
                {errors.email.message}
              </p>
            )}

          </fieldset>

          {/* PASSWORD */}
          <fieldset className="relative">

            <legend
              className="
              mb-2 font-medium
              text-gray-700 dark:text-gray-200
              "
            >
              Password
            </legend>

            <input
              type={isShow ? "text" : "password"}
              {...register("password", {
                required: 'Password is required'
              })}
              className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 dark:border-white/10
              bg-white dark:bg-white/5
              text-gray-800 dark:text-white
              outline-none
              focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Enter password"
            />

            {/* SHOW PASSWORD */}
            <span
              className='
              absolute top-[20px] right-5
              cursor-pointer
              text-gray-500 dark:text-gray-300
              '
              onClick={() => setShow(!isShow)}
            >
              {isShow ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className='text-red-500 mt-1 text-sm'>
                {errors.password.message}
              </p>
            )}

            {/* PASSWORD RULES
            <div
              className="
              mt-4 space-y-1 text-sm
              text-gray-500 dark:text-gray-300
              "
            >

              <p>• At least 6 characters</p>

              <p>• One uppercase letter</p>

              <p>• One lowercase letter</p>

            </div> */}

          </fieldset>

          {/* LOGIN BUTTON */}
          <button
            className="
            w-full py-3 rounded-xl
            text-white font-bold
            bg-gradient-to-r
            from-cyan-500
            via-blue-600
            to-indigo-700
            hover:scale-[1.02]
            transition-all duration-300
            shadow-lg
            "
          >
            Login
          </button>

        </form>

        {/* REGISTER */}
        <p
          className="
          mt-6 text-center text-sm
          text-gray-600 dark:text-gray-300
          "
        >
          Don't have an account?{" "}

          <Link
            href='/register'
            className='
            text-cyan-500 font-semibold
            hover:underline
            '
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Loginpage;

