import printsManifesto from "./_prints.json";

const OWNER = "https://github.com/Joaogabrielmaia";

/** Gera helpers de URL para um repositório (sempre branch main). */
export function repo(nome: string) {
  return {
    url: `${OWNER}/${nome}`,
    nome,
    doc: (caminho: string) => `${OWNER}/${nome}/blob/main/${caminho}`,
    tree: (caminho: string) => `${OWNER}/${nome}/tree/main/${caminho}`,
  };
}

function tituloDoArquivo(arquivo: string) {
  const sem = arquivo.replace(/^\d+-/, "").replace(/-/g, " ");
  return sem.charAt(0).toUpperCase() + sem.slice(1);
}

/**
 * Monta a lista de prints a partir do manifesto gerado por scripts/preparar-imagens.mjs.
 * `destaques` mapeia arquivo → legenda; os demais usam o título derivado do nome do arquivo.
 */
export function prints(slug: string, destaques: Record<string, string>) {
  const lista = (printsManifesto as Record<string, { arquivo: string; largura: number; altura: number }[]>)[slug] ?? [];
  return lista.map((p) => ({
    arquivo: p.arquivo,
    legenda: destaques[p.arquivo] ?? tituloDoArquivo(p.arquivo),
    destaque: p.arquivo in destaques,
    largura: p.largura,
    altura: p.altura,
  }));
}

export const AVISO_CENARIO =
  "Empresa, pessoas e dados deste projeto são fictícios. As reuniões de discovery foram simuladas, com o Claude no papel do cliente. O sistema roda localmente: não há produção, hospedagem nem clientes reais.";
