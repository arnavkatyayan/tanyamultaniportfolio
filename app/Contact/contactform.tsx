"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send message."
      );
    }
  }

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#EFE7E1] p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-[#1C1917] mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[#3B302C]">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-[#D8CBC3] px-4 py-3 outline-none focus:ring-2 focus:ring-[#8B1A2B]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[#3B302C]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-[#D8CBC3] px-4 py-3 outline-none focus:ring-2 focus:ring-[#8B1A2B]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-[#3B302C]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me a bit about what you're looking for..."
            className="w-full rounded-xl border border-[#D8CBC3] px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-[#8B1A2B]"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-[#8B1A2B] py-3 text-white font-medium transition-all duration-300 hover:bg-[#701524]"
        >
          Send Message
        </button>
        {status === "sending" && (
          <p className="text-sm text-[#8B1A2B]">Sending your message...</p>
        )}
        {status === "success" && (
          <p className="text-sm text-green-700">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">{errorMessage || "Unable to send message."}</p>
        )}
      </form>
    </div>
  );
}