
import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast({
        title: "Message received! 🚀 I’ll get back to you within 24 hours.",
        // The toast is retained only as a fallback/optional, but we'll show the message inline as required.
      });
    }, 1600);
  };

  return (
    <section className="py-16 flex flex-col items-center px-2" id="contact">
      <h2 className="text-2xl font-orbitron text-neonblue mb-4 md:mb-6 tracking-wide">Contact</h2>
      <div className="w-full max-w-md md:max-w-lg bg-black/40 rounded-2xl border border-neonblue p-6 shadow-xl glow mb-7 md:mb-8 space-y-5">
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-neonblue font-orbitron font-bold flex items-center gap-2 mb-2">
            Hire Me
          </h3>
          <p className="text-base md:text-lg text-white/90 text-center mb-4 font-medium max-w-[32rem]">
            I’m currently open to internships and freelance opportunities. If you’re looking for a dedicated Full Stack Developer who brings creativity and consistency — let’s connect!
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mb-2">
            <a
              href="https://www.linkedin.com/in/madhu-kanth-kodali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-neonblue via-neonpink to-neongreen text-white font-orbitron font-semibold text-lg shadow-glow hover:brightness-125 transition-all duration-150 hover:scale-105 glow-neon focus:outline-none focus:ring-2 focus:ring-neonblue"
              style={{ textShadow: "0 0 8px #00fff0" }}
            >
              <Linkedin size={28} /> LinkedIn
            </a>
            <a
              href="https://github.com/madhukodali23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-neongreen via-neonblue to-neonpink text-white font-orbitron font-semibold text-lg shadow-glow hover:brightness-125 transition-all duration-150 hover:scale-105 glow-neon focus:outline-none focus:ring-2 focus:ring-neonblue"
              style={{ textShadow: "0 0 8px #00fff0" }}
            >
              <Github size={28} /> GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-md md:max-w-lg">
        {/* Success Message */}
        {sent && (
          <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-neonblue via-neonpink to-neongreen rounded-2xl shadow-lg border-2 border-neonblue py-7 px-6 mb-6 animate-fade-in">
            <span className="text-2xl md:text-3xl font-bold font-orbitron text-white tracking-wide mb-2 drop-shadow-glow">
              Message received! 🚀
            </span>
            <span className="text-white/90 font-orbitron text-base md:text-lg text-center">
              I’ll get back to you within 24 hours.
            </span>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className={`bg-galaxypurple/85 rounded-2xl border border-neonblue shadow px-6 md:px-8 py-7 flex flex-col gap-5 transition-all ${
            sent ? "opacity-60 pointer-events-none scale-95 blur-[1px]" : ""
          }`}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-neonblue font-orbitron text-base mb-1"
            >
              Name
            </label>
            <input
              className="bg-black/60 border border-neonblue rounded-lg px-4 py-3 text-white font-orbitron placeholder:text-neonblue/50 focus:ring-2 focus:ring-neonblue focus:outline-none transition-all"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-neonblue font-orbitron text-base mb-1"
            >
              Email
            </label>
            <input
              className="bg-black/60 border border-neonblue rounded-lg px-4 py-3 text-white font-orbitron placeholder:text-neonblue/50 focus:ring-2 focus:ring-neonblue focus:outline-none transition-all"
              name="email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-neonblue font-orbitron text-base mb-1"
            >
              Message
            </label>
            <textarea
              className="bg-black/60 border border-neonblue rounded-lg px-4 py-3 text-white font-orbitron placeholder:text-neonblue/50 focus:ring-2 focus:ring-neonblue focus:outline-none transition-all min-h-[100px] resize-y"
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="How can I help you?"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full bg-gradient-to-r from-neonblue via-neonpink to-neongreen px-4 py-3 rounded-lg font-orbitron text-white text-lg font-semibold shadow-glow
              hover:brightness-125 hover:scale-105 animate-glow transition-all 
              disabled:opacity-60"
            disabled={sending || sent}
          >
            {sending ? "Sending..." : sent ? "Sent! 🚀" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};
