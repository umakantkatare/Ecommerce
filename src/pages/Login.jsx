import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Phone, Lock, Chrome } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { logIn, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
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
    // console.log(data);
    logIn(data);
    navigate("/");
  };

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  }, []);
  
  return (
    <div
      className="min-h-screen bg-gray-800 flex items-center justify-center px-4 text-black "
      // className="w-[80vw] h-[60vh] bg-gray-800 flex justify-center items-center mx-auto my-7 text-black"
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
        //  className="w-[35%] h-[90%] bg-white rounded-lg flex flex-col gap-5 mx-auto p-6 "
      >
        {/* Header */}
        <div className="flex flex-col items-center my-2">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <h3 className="text-lg text-gray-600">Login to your account</h3>
        </div>

        {/* Email / Phone */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("username", {
              required: "email or phone number is requried",
              pattern: /^([^\s@]+@[^\s@]+\.[^\s@]+|[6-9]\d{9})$/,
              message: "enter your correct number or email",
            })}
            type="text"
            placeholder="Email or Phone Number"
            className="border-2 p-2 pl-10 rounded-md w-full outline-none"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
          <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* Password */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-2 p-2 pl-10 pr-10 rounded-md w-full outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <Lock className="absolute left-3 top-3 text-gray-500" size={18} />

          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword((toggle) => !toggle)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end w-[75%] mx-auto">
          <span className="text-sm text-blue-600 cursor-pointer hover:underline font-medium">
            Forgot Password?
          </span>
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 py-2 px-6 w-[45%] rounded text-white font-semibold text-lg hover:bg-blue-500 active:scale-95">
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px bg-gray-300 w-[30%]" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 w-[30%]" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            className="flex items-center gap-2 border-2 py-2 px-4 rounded-md hover:bg-gray-100"
          >
            <Chrome size={18} className="text-blue-600" />
            Login with Google
          </button>
        </div>

        {/* Sign Up */}
        <Link to="/signup" className="text-center text-sm">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline font-medium">
            Sign Up
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
