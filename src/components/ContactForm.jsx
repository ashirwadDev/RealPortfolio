import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, message } = data;

    const { error } = await supabase.from("contacts").insert([{ name, email, message }]);

    if (error) {
      toast.error("Error sending message!");
    } else {
      toast.success("Message sent successfully!");
      reset();
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#0A0A0A] text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, minLength: 3 })}
          className={`p-3 rounded-md bg-[#121212] text-white placeholder-gray-400 border ${
            errors.name ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required (min 3 chars)</span>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className={`p-3 rounded-md bg-[#121212] text-white placeholder-gray-400 border ${
            errors.email ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}

        <textarea
          placeholder="Message"
          {...register("message", { required: true, minLength: 10 })}
          className={`p-3 rounded-md bg-[#121212] text-white placeholder-gray-400 border resize-none ${
            errors.message ? "border-red-500" : "border-gray-700"
          }`}
          rows={5}
        />
        {errors.message && <span className="text-red-500 text-sm">Message must be at least 10 characters</span>}

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-black font-bold py-3 rounded-md hover:opacity-80 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
