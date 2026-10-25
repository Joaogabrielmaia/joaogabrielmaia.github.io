"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Building2, User, MessageSquare } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { ui } from "@/content/ui";
import type { Lang } from "@/content/lang";

type Props = { lang: Lang; email: string; linkedin: string; github: string };

const campo =
  "w-full pl-10 pr-4 py-3 rounded-xl bg-(color:--card) border border-[#7a8c57]/40 text-sm text-(color:--ink) placeholder:text-neutral-500 focus:outline-none focus:border-[#F29A0F] focus:ring-2 focus:ring-[#F29A0F]/60 transition-colors";
const rotulo = "block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-mono";

export function Contact({ lang, email, linkedin, github }: Props) {
  const t = ui[lang].contact;
  const [dados, setDados] = useState({ user_name: "", user_email: "", user_company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [erro, setErro] = useState("");

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    if (!dados.user_name || !dados.user_email || !dados.message) {
      setStatus("error");
      setErro(t.required);
      return;
    }
    setStatus("sending");
    setErro("");
    try {
      // Envio direto via FormSubmit AJAX (site estático, sem backend próprio)
      const resposta = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: dados.user_name,
          email: dados.user_email,
          company: dados.user_company || t.notInformed,
          message: dados.message,
          _subject: t.subject,
          _captcha: "false",
        }),
      });
      const json = await resposta.json();
      if (resposta.ok || json.success === "true" || json.success === true) {
        setStatus("success");
        setDados({ user_name: "", user_email: "", user_company: "", message: "" });
      } else {
        setStatus("error");
        setErro(t.errorSend);
      }
    } catch (err) {
      console.error("FormSubmit fetch error:", err);
      setStatus("error");
      setErro(t.errorNet);
    }
  };

  const canais = [
    { href: `mailto:${email}`, rotulo: t.directEmail, texto: email, Icon: Mail, externo: false },
    { href: linkedin, rotulo: "LinkedIn", texto: "linkedin.com/in/joãogabrielmaia", Icon: LinkedinIcon, externo: true },
    { href: github, rotulo: "GitHub", texto: "github.com/Joaogabrielmaia", Icon: GithubIcon, externo: true },
  ];

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="contato-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description} />

        <div className="slab grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold text-(color:--ink) tracking-tight">{t.channels}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{t.channelsDesc}</p>
              <ul className="space-y-4 pt-2">
                {canais.map(({ href, rotulo: r, texto, Icon, externo }) => (
                  <li key={r}>
                    <a
                      href={href}
                      target={externo ? "_blank" : undefined}
                      rel={externo ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#7a8c57]/25 hover:border-[#F29A0F] hover:shadow-md transition-all"
                    >
                      <span className="p-3 rounded-xl bg-[#7a8c57]/20 text-(color:--gt2) shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="overflow-hidden">
                        <span className="text-xs font-mono text-neutral-500 block">{r}</span>
                        <span className="text-sm font-bold text-(color:--ink) truncate block">{texto}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={enviar} noValidate className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="user_name" className={rotulo}>
                  {t.name} <span aria-hidden className="text-[#F29A0F]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" aria-hidden />
                  <input id="user_name" required autoComplete="name" value={dados.user_name} onChange={(e) => setDados({ ...dados, user_name: e.target.value })} placeholder={t.namePh} className={campo} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="user_email" className={rotulo}>
                    {t.email} <span aria-hidden className="text-[#F29A0F]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" aria-hidden />
                    <input id="user_email" type="email" required autoComplete="email" value={dados.user_email} onChange={(e) => setDados({ ...dados, user_email: e.target.value })} placeholder={t.emailPh} className={campo} />
                  </div>
                </div>
                <div>
                  <label htmlFor="user_company" className={rotulo}>{t.company}</label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" aria-hidden />
                    <input id="user_company" autoComplete="organization" value={dados.user_company} onChange={(e) => setDados({ ...dados, user_company: e.target.value })} placeholder={t.companyPh} className={campo} />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={rotulo}>
                  {t.message} <span aria-hidden className="text-[#F29A0F]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" aria-hidden />
                  <textarea id="message" required rows={4} value={dados.message} onChange={(e) => setDados({ ...dados, message: e.target.value })} placeholder={t.messagePh} className={`${campo} resize-none`} />
                </div>
              </div>

              <div role="status" aria-live="polite">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/30 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" aria-hidden />
                    <span>{erro}</span>
                  </div>
                )}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-[#7a8c57]/15 text-(color:--gt2) border border-[#7a8c57]/40 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden />
                    <span>{t.success}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full py-4 px-6 rounded-sm bg-[#F29A0F] text-[#161616] font-bold text-sm hover:bg-[#d98200] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]/60"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#161616] border-t-transparent rounded-full animate-spin" aria-hidden />
                    <span>{t.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.send}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
