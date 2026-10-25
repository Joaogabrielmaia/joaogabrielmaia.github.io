"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Send, CheckCircle2, AlertCircle, Mail, Building2, User, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      // Envio direto via FormSubmit AJAX para joaogabrielmaia092@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/joaogabrielmaia092@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email,
          company: formData.user_company || "Não informada",
          message: formData.message,
          _subject: "Novo contato pelo Portfólio",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setStatus("success");
        setFormData({
          user_name: "",
          user_email: "",
          user_company: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Erro ao enviar mensagem via FormSubmit. Tente novamente.");
      }
    } catch (err) {
      console.error("FormSubmit fetch error:", err);
      setStatus("error");
      setErrorMessage("Ocorreu um erro ao enviar a mensagem. Verifique sua conexão e tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#F29A0F]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contato"
          title="Vamos conversar?"
          description="Procuro meu primeiro emprego formal em implantação, automação, customer success ou consultoria de soluções. Remoto ou híbrido (BH/Betim), PJ ou CLT."
          centered
        />

        <div className="slab grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-[#0F0F10] tracking-tight">
                Canais de Contato
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Sinta-se à vontade para entrar em contato diretamente via e-mail ou redes profissionais.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:joaogabrielmaia092@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F29A0F] hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#7a8c57]/20 text-[#4b5a30] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-mono text-neutral-400 block">E-mail Direto</span>
                    <span className="text-sm font-bold text-[#0F0F10] group-hover:text-black truncate block">
                      joaogabrielmaia092@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/jo%C3%A3ogabrielmaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F29A0F] hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#7a8c57]/20 text-[#4b5a30] shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">LinkedIn</span>
                    <span className="text-sm font-bold text-[#0F0F10] group-hover:text-black">
                      linkedin.com/in/joãogabrielmaia
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Joaogabrielmaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#F29A0F] hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#7a8c57]/20 text-[#4b5a30] shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">GitHub</span>
                    <span className="text-sm font-bold text-[#0F0F10] group-hover:text-black">
                      github.com/Joaogabrielmaia
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-xl relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="user_name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-mono">
                    Nome Completo <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="user_name"
                      name="name"
                      value={formData.user_name}
                      onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300/80 text-sm text-[#0F0F10] placeholder-neutral-400 focus:outline-none focus:border-[#0F0F10] focus:ring-1 focus:ring-[#0F0F10] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="user_email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-mono">
                      E-mail <span className="text-emerald-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="user_email"
                        name="email"
                        value={formData.user_email}
                        onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                        placeholder="seu.email@empresa.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300/80 text-sm text-[#0F0F10] placeholder-neutral-400 focus:outline-none focus:border-[#0F0F10] focus:ring-1 focus:ring-[#0F0F10] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user_company" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-mono">
                      Empresa
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="user_company"
                        name="company"
                        value={formData.user_company}
                        onChange={(e) => setFormData({ ...formData, user_company: e.target.value })}
                        placeholder="Nome da sua empresa"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300/80 text-sm text-[#0F0F10] placeholder-neutral-400 focus:outline-none focus:border-[#0F0F10] focus:ring-1 focus:ring-[#0F0F10] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-mono">
                    Mensagem <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-neutral-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Sua mensagem..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300/80 text-sm text-[#0F0F10] placeholder-neutral-400 focus:outline-none focus:border-[#0F0F10] focus:ring-1 focus:ring-[#0F0F10] transition-colors resize-none"
                      required
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || "Ocorreu um erro ao enviar. Tente novamente."}</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 px-6 rounded-sm bg-[#F29A0F] text-[#161616] font-bold text-sm hover:bg-[#d98200] transition-all flex items-center justify-center gap-2 border-0 shadow-md group disabled:opacity-60 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#161616] border-t-transparent rounded-full animate-spin" />
                      <span>Enviando mensagem...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
