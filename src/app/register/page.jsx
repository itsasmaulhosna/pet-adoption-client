'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaUser, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    watch,
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

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.photo,
      confirmPassword: user.confirmPassword
    });



    console.log({ data, error });

    if (data) {
      toast.success("Registration Successful 🐾");
      redirect('/');
    }

    if (error) {
      toast.error(error.message || "Registration Failed");
    }
  };

  const password = watch("password");

  return (
    <div className="
      min-h-screen flex items-center justify-center px-4 py-10
      bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100
      dark:from-[#06142E] dark:via-[#0B1F3A] dark:to-[#10254A]
    ">

      <div className="
        w-full max-w-md p-8 rounded-3xl
        bg-white/90 dark:bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
      ">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="
            w-20 h-20 rounded-full
            flex items-center justify-center
            bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700
            text-white text-3xl shadow-lg
          ">
            <FaUser />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-2 mb-6">
          Join PetNest 🐾
        </p>

        {/* GOOGLE BUTTON */}
        <button 
  type="button"
  onClick={handleGoogleSignIn}
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

          <p className="text-sm text-gray-400">OR</p>

          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-white/10"></div>

        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="
                w-full mt-1 px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-800 dark:text-white
                outline-none focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              className="
                w-full mt-1 px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-800 dark:text-white
                outline-none focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* PHOTO URL */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Photo URL
            </label>
            <input
              {...register("photo")}
              className="
                w-full mt-1 px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-800 dark:text-white
                outline-none focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Paste profile image URL"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: 6
              })}
              className="
                w-full mt-1 px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-800 dark:text-white
                outline-none focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Create password"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Confirm Password
            </label>

            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: value => value === password || "Passwords do not match"
              })}
              className="
                w-full mt-1 px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-800 dark:text-white
                outline-none focus:ring-2 focus:ring-cyan-500
              "
              placeholder="Confirm password"
            />

            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
            >
              {showConfirm ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* PASSWORD RULES */}
          <div className="text-sm text-gray-500 dark:text-gray-300 space-y-1">
            <p>• At least 6 characters</p>
            <p>• One uppercase letter</p>
            <p>• One lowercase letter</p>
          </div>

          {/* BUTTON */}
          <button className="
            w-full py-3 rounded-xl font-bold text-white
            bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700
            hover:scale-[1.02] transition
          ">
            Register
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center mt-5 text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;