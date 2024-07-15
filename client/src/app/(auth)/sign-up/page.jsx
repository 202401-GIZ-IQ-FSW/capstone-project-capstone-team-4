"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  userName: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignUp() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setError("");
      setSuccess("");
      setLoading(true);

      try {
        const response = await axios.post("/register", {
          name: values.fullName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });

        if (response.status === 201) {
          setSuccess("Registration successful!");
          formik.resetForm();
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.errorMessage);
        } else {
          setError("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex justify-center">
      <div className="w-2/3 py-6 px-10">
        <h1 className="text-xl font-extrabold">Technical Support</h1>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 max-w-md w-full">
            <h2 className="text-4xl font-extrabold mb-2 text-center">
              Join our platform
            </h2>
            <p className="text-gray-500 mb-6 text-center text-sm">
              Provide your details to get started with support
            </p>
            <form onSubmit={formik.handleSubmit}>
              {error && (
                <div className="mb-4 text-sm text-red-500 text-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-4 text-sm text-green-500 text-center">
                  {success}
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 text-sm"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  className={`block w-full mt-2 pr-10 py-2 pl-2 border ${
                    formik.errors.fullName && formik.touched.fullName
                      ? "border-red-400"
                      : "border-gray-400"
                  } focus:outline-black focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="First Last"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm"
                >
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="userName"
                  className={`block w-full mt-2 pr-10 py-2 pl-2 border ${
                    formik.errors.userName && formik.touched.userName
                      ? "border-red-400"
                      : "border-gray-400"
                  } focus:outline-black focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="tech_pro123"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.userName && formik.touched.userName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.userName}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`block w-full mt-2 pr-10 py-2 pl-2 border ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-400"
                      : "border-gray-400"
                  } focus:outline-black focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="email@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`block w-full mt-2 pr-10 py-2 pl-2 border ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-400"
                      : "border-gray-400"
                  } focus:outline-black focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="************"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm"
                >
                  Confirm password *
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  className={`block w-full mt-2 pr-10 py-2 pl-2 border ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "border-red-400"
                      : "border-gray-400"
                  } focus:outline-black focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="************"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
              <div className="my-4 text-xs text-gray-500">
                By tapping Submit, you agree to our Terms & Conditions and
                Privacy Policy
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-black text-sm font-medium"
                  disabled={loading || !formik.isValid}
                >
                  {loading ? "Submitting..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/3 min-h-screen flex-shrink-0 relative">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/static/images/laptop-2.jpg"
          alt="Laptop"
        />
      </div>
    </div>
  );
}
