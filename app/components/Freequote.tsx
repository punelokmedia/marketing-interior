"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { submitLeadToWeb3Forms } from "../lib/web3forms";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  whatsappUpdates?: boolean;
};

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>();

  if (!open) return null;

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    const structuredMessage = [
      "Lead Details",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `WhatsApp Updates: ${data.whatsappUpdates ? "Yes" : "No"}`,
    ].join("\n");

    try {
      await submitLeadToWeb3Forms({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: structuredMessage,
        source: "Get Free Quote Popup",
        whatsappUpdates: data.whatsappUpdates,
      });

      setSubmitSuccess("Thank you! Your details have been submitted successfully.");
      reset();
      setStep(1);

      setTimeout(() => {
        onClose();
      }, 900);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ STEP VALIDATION
  const handleNext = async () => {
    const valid = await trigger(["name", "phone"]);
    if (valid) setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl w-full max-w-md p-8 shadow-xl relative"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-lg"
        >
          ✕
        </button>

        {/* STEP INDICATOR */}
        <div className="absolute top-4 right-12 text-sm font-medium text-gray-500">
          {step}/2
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold text-gray-900">
                Designs for Every Budget
              </h2>

              <div className="mt-6 space-y-5">
                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                    bg-gray-50 text-gray-700 placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Phone Number
                  </label>

                  <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-red-400 overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-3 border-r bg-white">
                      <span className="text-sm font-medium text-gray-700">
                        🇮🇳
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        +91
                      </span>
                    </div>

                    <input
                      {...register("phone", {
                        required: "Phone is required",
                        minLength: {
                          value: 10,
                          message: "Enter valid 10 digit number",
                        },
                      })}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-3 bg-transparent outline-none placeholder:text-gray-400"
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>

                {/* CHECKBOX */}
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    {...register("whatsappUpdates")}
                    className="accent-red-500"
                  />
                  Send me updates on WhatsApp
                </label>

                {/* NEXT BUTTON */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition"
                >
                  NEXT →
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold text-gray-900">
                Let’s Get Started
              </h2>

              <div className="mt-6 space-y-5">
                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                    bg-gray-50 placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-gray-600"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </>
          )}

          {submitError && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {submitError}
            </p>
          )}

          {submitSuccess && (
            <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {submitSuccess}
            </p>
          )}

          {/* TERMS */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By submitting, you agree to our{" "}
            <span className="text-red-500">privacy policy</span>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
