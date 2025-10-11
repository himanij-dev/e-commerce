"use client"

import React, { ReactEventHandler } from "react";
import CommonInput from "../lib/components/CommonInput";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginTypes } from "../lib/types/type";
import { apiClient } from "../utils/apiClient";


// schema for yup validation
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });
  

  const submitLoginForm = async (data : loginTypes)=>{
    try{
     const resp = await apiClient("/auth/login", { method: "POST", body: data });
     console.log("login response",resp)
    }catch{
    console.log("error while login")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(submitLoginForm)}>
          <div className="mb-4">
            <CommonInput
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error">Email is required.</p>}
          </div>

          <div className="mb-6">
            <CommonInput
              type="password"
              placeholder="Enter your password"
               {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Password is required.</p>}
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
