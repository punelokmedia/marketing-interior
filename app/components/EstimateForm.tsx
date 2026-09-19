"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { EstimateConfig } from "../lib/estimates";
import { submitLeadToWeb3Forms } from "../lib/web3forms";

type Values = {
  name: string;
  phone: string;
  email: string;
  city: string;
  details: Record<string, string>;
  services: string[];
  startDate: string;
  requirements: string;
};

const inputClass = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200";

export default function EstimateForm({ service, config }: { service: string; config: EstimateConfig }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const submitting = useRef(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ defaultValues: { services: [], details: {} } });

  const onSubmit = async (values: Values) => {
    if (submitting.current) return;
    submitting.current = true;
    setError("");
    try {
      await submitLeadToWeb3Forms({
        name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim(),
        source: `${config.title} Estimate`,
        message: "",
        estimate: { service, city: values.city.trim(), details: values.details, services: values.services, startDate: values.startDate, requirements: values.requirements.trim() },
      });
      setSuccess(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to submit. Please try again.");
    } finally {
      submitting.current = false;
    }
  };

  if (success) return (
    <div role="status" className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-lg sm:p-12">
      <h2 className="text-3xl font-bold text-slate-900">Your estimate request has been received</h2>
      <p className="mt-4 leading-7 text-slate-700">Thank you! The Benz Architecture team will review your {config.title.toLowerCase()} requirements and contact you with an approximate cost.</p>
    </div>
  );

  const errorText = (id: string, message?: string) => message ? <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-700">{message}</p> : null;
  return (
    <form noValidate onSubmit={(event) => { void handleSubmit(onSubmit)(event); }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
      <p className="mb-7 text-sm leading-6 text-slate-600">All fields are required except Additional Requirements. Our team will contact you with an estimate based on your selections.</p>
      <fieldset disabled={isSubmitting} className="grid min-w-0 gap-6 sm:grid-cols-2 disabled:opacity-70">
        {([
          { name: "name", label: "Full Name", type: "text", autoComplete: "name", maxLength: 150 },
          { name: "phone", label: "Mobile Number", type: "tel", autoComplete: "tel", maxLength: 25 },
          { name: "email", label: "Email Address", type: "email", autoComplete: "email", maxLength: 254 },
          { name: "city", label: "City / Location", type: "text", autoComplete: "address-level2", maxLength: 150 },
        ] as const).map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-sm font-medium">{field.label}</label>
            <input id={field.name} type={field.type} autoComplete={field.autoComplete} maxLength={field.maxLength} required className={inputClass}
              aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              {...register(field.name, {
                required: `${field.label} is required.`,
                validate: (value) => {
                  if (!value.trim()) return `${field.label} is required.`;
                  if (field.name === "phone" && (!/^[+\d\s()-]{10,25}$/.test(value) || value.replace(/\D/g, "").length < 10)) return "Enter a valid mobile number, including country code if needed.";
                  if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email address.";
                  return true;
                },
              })} />
            {errorText(field.name, errors[field.name]?.message)}
          </div>
        ))}
        {config.fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-sm font-medium">{field.label}</label>
            <select id={field.name} required className={inputClass} defaultValue="" aria-invalid={!!errors.details?.[field.name]} aria-describedby={errors.details?.[field.name] ? `${field.name}-error` : undefined}
              {...register(`details.${field.name}`, { required: `Select ${field.label.toLowerCase()}.` })}>
              <option value="" disabled>Select an option</option>
              {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {errorText(field.name, errors.details?.[field.name]?.message)}
          </div>
        ))}
        <fieldset className="min-w-0 sm:col-span-2" aria-describedby={errors.services ? "services-error" : undefined}>
          <legend className="text-sm font-medium">Required Services <span className="font-normal text-slate-600">(select all that apply)</span></legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {config.services.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 text-sm leading-6 has-checked:border-red-400 has-checked:bg-red-50">
                <input type="checkbox" value={option} className="size-4 shrink-0 accent-red-600" {...register("services", { validate: (value) => value.length > 0 || "Select at least one service." })} />
                {option}
              </label>
            ))}
          </div>
          {errorText("services", errors.services?.message)}
        </fieldset>
        <div>
          <label htmlFor="startDate" className="text-sm font-medium">Expected Start Date</label>
          <input id="startDate" type="date" required className={inputClass} aria-invalid={!!errors.startDate} aria-describedby={errors.startDate ? "startDate-error" : undefined} {...register("startDate", { required: "Choose your expected start date." })} />
          {errorText("startDate", errors.startDate?.message)}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="requirements" className="text-sm font-medium">Additional Requirements <span className="text-slate-500">(optional)</span></label>
          <textarea id="requirements" rows={4} maxLength={3000} className={inputClass} placeholder="Tell us about your preferred materials, finishes, dimensions or any other requirements." {...register("requirements")} />
        </div>
        <div className="sm:col-span-2">
          {error && <p role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 disabled:cursor-wait disabled:opacity-70 sm:w-auto">
            {isSubmitting ? "Submitting…" : "Get My Approximate Cost"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
