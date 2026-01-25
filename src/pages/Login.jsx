import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
<<<<<<< Updated upstream
import { Link, redirect, useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 46e9a38c5a8f3ba7e7d34a1e246e91f67d2aa0b6
import { Eye, EyeOff, Mail, Phone, Lock, Chrome } from "lucide-react";
=======
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
>>>>>>> Stashed changes
import useAuth from "../hooks/useAuth";
import { DiChrome } from "react-icons/di";

const Login = () => {
  const { logIn, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
<<<<<<< Updated upstream
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    logIn(data);
    navigate("/");
  };
=======
    formState: { errors, isSubmitting },
  } = useForm();
>>>>>>> Stashed changes

  // Redirect if already logged in
  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    await logIn(data);
    navigate("/");
  };

  return (
<<<<<<< Updated upstream
    <div
      className="min-h-screen bg-gray-800 flex items-center justify-center px-4 text-black "
    >
      {/* card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        bg-white rounded-xl shadow-lg
        w-full 
        sm:w-[75%] 
        md:w-[55%] 
        lg:w-[35%] 
        xl:w-[28%]
        p-6 sm:p-8
        flex flex-col gap-5
      "
<<<<<<< HEAD
        //  className="w-[35%] h-[90%] bg-white rounded-lg flex flex-col gap-5 mx-auto p-6 "
=======
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          bg-white w-full max-w-sm
          rounded-xl shadow-lg
          p-6 flex flex-col gap-5
        "
>>>>>>> Stashed changes
=======
>>>>>>> 46e9a38c5a8f3ba7e7d34a1e246e91f67d2aa0b6
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl text-gray-700 font-bold">Welcome Back!</h1>
          <p className="text-gray-600 text-sm">Login to your account</p>
        </div>

        {/* Email / Phone */}
        <div className="relative">
          <input
            {...register("username", {
              required: "Email or phone number is required",
              pattern: {
                value: /^([^\s@]+@[^\s@]+\.[^\s@]+|[6-9]\d{9})$/,
                message: "Enter a valid email or phone number",
              },
            })}
            type="text"
            placeholder="Email or Phone Number"
            className="w-full border-2 p-2 pl-10 rounded-md outline-none text-black placeholder-gray-500 "
          />
          <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-2 p-2 pl-10 pr-10 rounded-md outline-none text-black placeholder-gray-400"
          />
          <Lock className="absolute left-3 top-3 text-gray-500" size={18} />

          <span
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </div>

        {/* Login Button */}
        <button
          disabled={isSubmitting}
          className="
            bg-blue-600 text-white py-2 rounded-md
            font-semibold text-lg
            hover:bg-blue-500 active:scale-95
            disabled:opacity-60
          "
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="
            flex items-center justify-center gap-2
            border-2 py-2 rounded-md
            text-black
          hover:bg-blue-600
          hover:text-white
          "
        >
          <DiChrome size={18} className="" />
          Login with Google
        </button>

        {/* Signup */}
        <Link to="/signup" className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="text-blue-600 hover:underline font-medium">
            Sign Up
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
