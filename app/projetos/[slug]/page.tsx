import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { projects, projectBySlug, roleBySlug } from "@/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Chip } from "@/components/ui/Chip";
import { Toc } from "@/components/ui/Toc";
import { Gallery } from "@/components/Gallery";
import { RevealList } from "@/components/ui/RevealList";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  const imagem = p.capa ? (p.capa.startsWith("/") ? p.capa : `/projects/${p.slug}/${p.capa}.webp`) : undefined;
  return {
    title: p.titulo,
    description: p.frase,
    alternates: { canonical: `/projetos/${p.slug}` },
    openGraph: { title: `${p.titulo} | João Gabriel Maia`, description: p.frase, images: imagem ? [imagem] : undefined },
    twitter: { card: "summary_large_image", images: imagem ? [imagem] : undefined },
  };
}

function Secao({ id, titulo, children }: { id: string; titulo: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="scroll-mt-28 py-8">
      <h2 id={`${id}-t`} className="font-condensed uppercase font-normal text-4xl sm:text-5xl leading-none text-[#7a8c57] mb-6">
        {titulo}
      </h2>
      {children}
    </section>
  );
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const anterior = projects[(i - 1 + projects.length) % projects.length];
  const proximo = projects[(i + 1) % projects.length];

  const secoes = [
    { id: "resumo", rotulo: "Resumo em 30 segundos" },
    ...(p.texto.length ? p.texto.map((t, k) => ({ id: `texto-${k}`, rotulo: t.titulo })) : []),
    ...(p.prints.length ? [{ id: "telas", rotulo: "Telas" }] : []),
    ...(p.diagramas.length ? [{ id: "como-funciona", rotulo: "Como funciona" }] : []),
    ...(p.decisoes.length ? [{ id: "decisoes", rotulo: "Decisões e trade-offs" }] : []),
    ...(p.numeros.length || p.naoValidado.length ? [{ id: "qualidade", rotulo: "Qualidade" }] : []),
    { id: "areas-ligadas", rotulo: "Áreas ligadas ao projeto" },
    ...(p.roteiroLeitura.length ? [{ id: "leitura", rotulo: "Roteiro de leitura" }] : []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb
        itens={[{ rotulo: "Início", href: "/" }, { rotulo: "Projetos", href: "/projetos" }, { rotulo: p.titulo }]}
        voltarPara="/#projetos"
      />

      <header className="border-y border-black/20 py-8">
        {p.selo && <p className="mb-3 inline-block rounded-full bg-[#F29A0F] px-4 py-1.5 text-xs font-bold text-[#161616]">{p.selo}</p>}
        <h1 className="font-condensed uppercase font-normal text-6xl sm:text-8xl leading-[0.95] text-[#7a8c57]">{p.titulo}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{p.frase}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-wider text-neutral-600">Áreas ligadas</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.areas.filter((a) => a.nivel === "principal").map((a) => (
            <Chip key={a.area} variant="area">{roleBySlug(a.area)?.nomeCurto}</Chip>
          ))}
          {p.areas.filter((a) => a.nivel === "relacionado").map((a) => (
            <Chip key={a.area} variant="area-rel">{roleBySlug(a.area)?.nomeCurto}</Chip>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.map((t) => <Chip key={t}>{t}</Chip>)}
        </div>
        <p className="mt-4 text-sm text-neutral-600">Status: {p.status}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {p.repositorio && (
            <a href={p.repositorio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-5 py-2.5 text-sm font-bold text-[#161616] hover:bg-[#d98200]">
              Ver no GitHub <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
          {p.repositorio && p.repoNome && (
            <a href={`${p.repositorio}#readme`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
              <BookOpen className="h-4 w-4" aria-hidden /> Ler o README
            </a>
          )}
          {p.repositorio && p.tipo === "novo" && (
            <a href={`${p.repositorio}/blob/main/docs/INDEX.md`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
              <FileText className="h-4 w-4" aria-hidden /> Ver a documentação
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
              Acessar demo <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
          {p.arquivosExtras.map((a) => (
            <a key={a.url} href={a.url} className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
              {a.rotulo}
            </a>
          ))}
        </div>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <Toc itens={secoes} />

        <div className="min-w-0 max-w-4xl">
          <Secao id="resumo" titulo="Resumo em 30 segundos">
            <dl className="grid gap-5 md:grid-cols-3">
              {[
                ["Problema", p.resumo30s.problema],
                ["O que construí", p.resumo30s.construi],
                ["O que mostra", p.resumo30s.importa],
              ].map(([t, d]) => (
                <div key={t} className="glass-card p-5">
                  <dt className="font-display font-extrabold text-[#5b6b3e]">{t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-neutral-700">{d}</dd>
                </div>
              ))}
            </dl>

            {p.cenario && (
              <aside aria-label="Sobre este cenário" className="mt-6 rounded-2xl border-2 border-dashed border-[#7a8c57] bg-[#fbfcf3]/80 p-5">
                <p className="font-display font-extrabold text-[#5b6b3e]">Sobre este cenário</p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">{p.cenario.empresa}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">{p.cenario.descricao}</p>
              </aside>
            )}

            {p.destaques.length > 0 && (
              <ul className="mt-6 list-disc space-y-1.5 pl-5 text-sm text-neutral-800">
                {p.destaques.map((d) => <li key={d}>{d}</li>)}
              </ul>
            )}
          </Secao>

          {p.texto.map((t, k) => (
            <Secao key={t.titulo} id={`texto-${k}`} titulo={t.titulo}>
              <div className="space-y-3 text-base leading-relaxed text-neutral-800">
                {t.paragrafos.map((par) => <p key={par}>{par}</p>)}
              </div>
            </Secao>
          ))}

          {p.prints.length > 0 && (
            <Secao id="telas" titulo="Telas">
              <Gallery slug={p.slug} prints={p.prints} />
            </Secao>
          )}

          {p.diagramas.length > 0 && (
            <Secao id="como-funciona" titulo="Como funciona">
              <div className="space-y-8">
                {p.diagramas.map((d) => (
                  <figure key={d.arquivo}>
                    <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-[0_14px_24px_-16px_rgba(0,0,0,0.5)]" tabIndex={0} aria-label={`Diagrama: ${d.legenda} (role para os lados se necessário)`}>
                      <Image
                        src={`/projects/${p.slug}/diagrams/${d.arquivo}`}
                        alt={d.legenda}
                        width={1600}
                        height={900}
                        loading="lazy"
                        className="mx-auto h-auto w-full min-w-[640px] max-w-full"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm text-neutral-700">{d.legenda}</figcaption>
                  </figure>
                ))}
              </div>
            </Secao>
          )}

          {p.decisoes.length > 0 && (
            <Secao id="decisoes" titulo="Decisões e trade-offs">
              <ul className="grid gap-5 md:grid-cols-2">
                {p.decisoes.map((d) => (
                  <li key={d.decisao} className="glass-card flex flex-col gap-2 p-5 text-sm">
                    <h3 className="font-display text-base font-extrabold leading-snug text-[#161616]">{d.decisao}</h3>
                    <p><strong className="text-[#5b6b3e]">O que ganhei:</strong> {d.ganhei}</p>
                    <p><strong className="text-[#5b6b3e]">O que paguei:</strong> {d.paguei}</p>
                    <p><strong className="text-[#5b6b3e]">Quando eu mudaria:</strong> {d.quandoMudaria}</p>
                    {d.adr && (
                      <a href={d.adr} target="_blank" rel="noopener noreferrer" className="mt-auto pt-1 font-bold text-[#8f5600] underline underline-offset-2 hover:text-[#161616]">
                        Ler o ADR no GitHub
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Secao>
          )}

          {(p.numeros.length > 0 || p.naoValidado.length > 0) && (
            <Secao id="qualidade" titulo="Qualidade">
              {p.numeros.length > 0 && (
                <div className="overflow-x-auto rounded-2xl bg-white/80" tabIndex={0} role="region" aria-label="Tabela de números do projeto (role para os lados se necessário)">
                  <table className="w-full min-w-[34rem] text-left text-sm">
                    <caption className="sr-only">Números reais registrados no repositório, com fonte e data</caption>
                    <thead className="bg-[#7a8c57]/15 text-[#4b5a30]">
                      <tr>
                        <th scope="col" className="p-3">O que foi medido</th>
                        <th scope="col" className="p-3">Resultado</th>
                        <th scope="col" className="p-3">Fonte</th>
                        <th scope="col" className="p-3">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.numeros.map((n) => (
                        <tr key={n.rotulo} className="border-t border-black/10 align-top">
                          <th scope="row" className="p-3 font-semibold text-neutral-900">{n.rotulo}</th>
                          <td className="p-3 text-neutral-800">{n.valor}</td>
                          <td className="p-3 text-neutral-600">{n.fonte}</td>
                          <td className="p-3 whitespace-nowrap text-neutral-600">{n.data}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {p.naoValidado.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-display text-lg font-extrabold text-[#161616]">O que não foi validado</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-800">
                    {p.naoValidado.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              )}
            </Secao>
          )}

          <Secao id="areas-ligadas" titulo="Áreas ligadas ao projeto">
            <ul className="space-y-3">
              {[...p.areas].sort((a, b) => (a.nivel === b.nivel ? 0 : a.nivel === "principal" ? -1 : 1)).map((a) => (
                <li key={a.area} className="glass-card flex flex-col gap-1 p-4 text-sm sm:flex-row sm:items-start sm:gap-4">
                  <div className="sm:w-56 sm:shrink-0">
                    <Link href={`/areas/${a.area}`} className="font-display font-extrabold text-[#161616] hover:text-[#F29A0F] underline-offset-2 hover:underline">
                      {roleBySlug(a.area)?.nome}
                    </Link>
                    <p className="mt-1"><Chip variant={a.nivel === "principal" ? "area" : "area-rel"}>{a.nivel === "principal" ? "Mais ligado" : "Também ligado"}</Chip></p>
                  </div>
                  <p className="text-neutral-700">{a.evidencia}</p>
                </li>
              ))}
            </ul>
          </Secao>

          {p.roteiroLeitura.length > 0 && (
            <Secao id="leitura" titulo="Roteiro de leitura">
              <p className="mb-4 text-sm text-neutral-700">Sete passos para entender o projeto na ordem em que ele foi pensado:</p>
              <RevealList numerada itens={p.roteiroLeitura} />
              {p.documentos.length > 0 && (
                <>
                  <h3 className="mt-8 font-display text-lg font-extrabold text-[#161616]">Documentos-chave</h3>
                  <div className="mt-3"><RevealList colunas={2} itens={p.documentos} /></div>
                </>
              )}
            </Secao>
          )}

          <nav aria-label="Outros projetos" className="mt-8 grid gap-4 border-t border-black/20 pt-8 sm:grid-cols-2">
            <Link href={`/projetos/${anterior.slug}`} className="glass-card p-5">
              <span className="text-xs uppercase tracking-wider text-neutral-600">← Projeto anterior</span>
              <span className="mt-1 block font-condensed text-3xl uppercase text-[#5b6b3e]">{anterior.titulo}</span>
            </Link>
            <Link href={`/projetos/${proximo.slug}`} className="glass-card p-5 sm:text-right">
              <span className="text-xs uppercase tracking-wider text-neutral-600">Próximo projeto →</span>
              <span className="mt-1 block font-condensed text-3xl uppercase text-[#5b6b3e]">{proximo.titulo}</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
