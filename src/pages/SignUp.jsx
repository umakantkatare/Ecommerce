import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Phone, Lock, Chrome, User } from "lucide-react";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const {newUser} = useAuth()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    validate,
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
    newUser(data)
    navigate("/");
  };

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
          <h1 className="text-2xl font-bold">
            Welcome To Our Ecommerce Website!
          </h1>
          <h3 className="text-lg text-gray-600 font-medium">
            Create New Account
          </h3>
        </div>

        {/* Name */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("fullName", {
              required: "full name is required",
              pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: "enter your correct number or email",
              },
            })}
            type="text"
            placeholder="Enter Your Full Name"
            className="border-2 p-2 pl-10 rounded-md w-full outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
          <User className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* Email */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("email", {
              required: "email is requried",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "enter your correct number or email",
              },
            })}
            type="email"
            placeholder=" Enter Your Email"
            className="border-2 p-2 pl-10 rounded-md w-full outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>
        {/*  Phone */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("PhoneNumber", {
              required: "phone number is requried",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Incorrect phone number",
              },
            })}
            type="number"
            placeholder="Enter Your Phone Number"
            className="border-2 p-2 pl-10 rounded-md w-full outline-none"
          />
          {errors.PhoneNumber && (
            <p className="text-red-500 text-sm">{errors.PhoneNumber.message}</p>
          )}
          <Phone className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* Password */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("password", {
              required: "password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
              },
              minLength: {
                value: 8,
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

        {/* cnfrm password */}
        <div className="relative w-[75%] mx-auto">
          <input
            {...register("cnfrmPassword", {
              required: "confirm password is required",
              validate: (value) => value === getValues("password"),
            })}
            placeholder=" Confirm Password"
            className="border-2 p-2 pl-10 pr-10 rounded-md w-full outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 py-2 px-6 w-[55%] rounded text-white font-semibold text-lg hover:bg-blue-500 active:scale-95">
            Create New Account
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
        <Link to="/login" className="text-center text-sm">
          If you have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline font-medium">
            Sign In
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
