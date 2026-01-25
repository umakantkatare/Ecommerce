import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { DiChrome } from "react-icons/di";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { logIn, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    try {
      await logIn(data);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 flex flex-col gap-5"
      >
        <div className="text-center">
          <h1 className="text-2xl text-gray-700 font-bold">Welcome Back!</h1>
          <p className="text-gray-600 text-sm">Login to your account</p>
        </div>

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
            className="w-full border-2 p-2 pl-10 rounded-md outline-none text-black placeholder-gray-500"
          />
          <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

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

        <div className="text-right text-sm">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md font-semibold text-lg hover:bg-blue-500 active:scale-95 disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 border-2 py-2 rounded-md text-black hover:bg-blue-600 hover:text-white transition-colors"
        >
          <DiChrome size={18} />
          Login with Google
        </button>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;