
import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShield,
  FiCheckCircle,
  FiRotateCcw,
  FiArrowRight,
} from "react-icons/fi";

const FormValidation = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (submitted) setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      newErrors.fullName = "Name should contain only letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (
      !(
        formData.password.length >= 8 &&
        /[a-z]/.test(formData.password) &&
        /[A-Z]/.test(formData.password) &&
        /[0-9]/.test(formData.password) &&
        /[@#$%&*]/.test(formData.password)
      )
    ) {
      newErrors.password = "Password does not meet all requirements.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the Terms and Privacy Policy.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const passwordRules = [
    {
      text: "At least 8 characters",
      valid: formData.password.length >= 8,
    },
    {
      text: "At least 1 uppercase letter",
      valid: /[A-Z]/.test(formData.password),
    },
    {
      text: "At least 1 lowercase letter",
      valid: /[a-z]/.test(formData.password),
    },
    {
      text: "At least 1 number (0-9)",
      valid: /[0-9]/.test(formData.password),
    },
    {
      text: "At least 1 special character (@#$%&*)",
      valid: /[@#$%&*]/.test(formData.password),
    },
  ];

  const inputClass = (name) =>
    `h-12 w-full rounded-xl border bg-slate-50/70 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:bg-white focus:bg-white focus:ring-4 ${
      errors[name]
        ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
    }`;

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  const FieldIcon = ({ children }) => (
    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
      {children}
    </span>
  );

  const ErrorText = ({ name }) =>
    errors[name] ? (
      <p role="alert" className="mt-1.5 text-xs font-medium text-rose-500">
        {errors[name]}
      </p>
    ) : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7ff] px-4 py-10 sm:px-6 sm:py-14">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/25">
            <FiUser size={26} />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Welcome to Form Builder
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Create Your Account
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Fill in your details below to get started with your new account.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div
            role="status"
            className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700 shadow-sm"
          >
            <FiCheckCircle size={22} className="shrink-0" />
            Registration form submitted successfully!
          </div>
        )}

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-[0_25px_80px_-25px_rgba(30,64,175,0.18)]">
          {/* Card Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1d4ed8] via-[#4f46e5] to-[#7c3aed] px-6 py-7 sm:px-10">
            <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
            <div className="pointer-events-none absolute bottom-0 right-28 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Personal Information
                </p>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Registration Form
                </h2>
                <p className="mt-2 text-sm text-blue-100">
                  Fields marked with * are required.
                </p>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur sm:flex">
                <FiShield size={27} />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-8 lg:p-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                01
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Your Details
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  Tell us a little about yourself.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiUser size={17} /></FieldIcon>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={!!errors.fullName}
                    className={inputClass("fullName")}
                  />
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">
                  Use letters and spaces only.
                </p>
                <ErrorText name="fullName" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiMail size={17} /></FieldIcon>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className={inputClass("email")}
                  />
                </div>
                <ErrorText name="email" />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiPhone size={17} /></FieldIcon>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    maxLength={10}
                    inputMode="numeric"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    className={inputClass("phone")}
                  />
                </div>
                <ErrorText name="phone" />
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className={labelClass}>
                  Gender <span className="text-rose-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  aria-invalid={!!errors.gender}
                  className={`h-12 w-full rounded-xl border bg-slate-50/70 px-4 text-sm outline-none transition focus:bg-white focus:ring-4 ${
                    errors.gender
                      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                      : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                  } ${formData.gender ? "text-slate-800" : "text-slate-400"}`}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ErrorText name="gender" />
              </div>

              {/* City */}
              <div className="md:col-span-2">
                <label htmlFor="city" className={labelClass}>
                  City <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiMapPin size={17} /></FieldIcon>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    autoComplete="address-level2"
                    aria-invalid={!!errors.city}
                    className={inputClass("city")}
                  />
                </div>
                <ErrorText name="city" />
              </div>
            </div>

            {/* Security Section */}
            <div className="mb-7 mt-10 flex items-center gap-3 border-t border-slate-100 pt-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <FiShield size={19} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Account Security
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  Choose a strong password to protect your account.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
              {/* Password */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiLock size={17} /></FieldIcon>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    aria-invalid={!!errors.password}
                    className={`${inputClass("password")} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                  </button>
                </div>
                <ErrorText name="password" />

                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <p className="mb-3 text-xs font-bold text-slate-700">
                    Password Requirements
                  </p>
                  <div className="space-y-2">
                    {passwordRules.map((rule, index) => (
                      <p
                        key={index}
                        className={`flex items-center gap-2 text-xs transition-colors ${
                          rule.valid ? "text-emerald-600" : "text-slate-500"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            rule.valid
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {rule.valid ? (
                            <FiCheckCircle size={12} />
                          ) : (
                            <span className="text-[9px]">•</span>
                          )}
                        </span>
                        {rule.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Confirm Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <FieldIcon><FiLock size={17} /></FieldIcon>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    aria-invalid={!!errors.confirmPassword}
                    className={`${inputClass("confirmPassword")} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={17} />
                    ) : (
                      <FiEye size={17} />
                    )}
                  </button>
                </div>
                <ErrorText name="confirmPassword" />

                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <FiShield size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Your security matters
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Use a unique password that meets all the listed
                        security requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  aria-invalid={!!errors.terms}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded accent-blue-600"
                />
                <span className="text-sm leading-6 text-slate-600">
                  I agree to the{" "}
                  <a
                    href="#terms"
                    onClick={(e) => e.preventDefault()}
                    className="font-semibold text-blue-600 underline-offset-4 hover:underline"
                  >
                    Terms of Services
                  </a>{" "}
                  and{" "}
                  <a
                    href="#privacy"
                    onClick={(e) => e.preventDefault()}
                    className="font-semibold text-blue-600 underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <ErrorText name="terms" />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
              >
                <FiRotateCcw size={16} />
                Reset Form
              </button>

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0 active:scale-[0.98]"
              >
                Create Account
                <FiArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
              <FiShield size={14} />
              Your information is handled with care.
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Simple forms. Better experiences.
        </p>
      </div>
    </main>
  );
};

export default FormValidation;
