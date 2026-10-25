"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// `document.referrer` não muda em navegação interna (SPA), então registramos aqui
// se a pessoa já navegou dentro do site: só nesse caso "Voltar" usa o histórico.
let navegouNoSite = false;
export const veioDoSite = () => navegouNoSite;

export function NavTracker() {
  const pathname = usePathname();
  const anterior = useRef<string | null>(null);

  useEffect(() => {
    if (anterior.current !== null && anterior.current !== pathname) navegouNoSite = true;
    anterior.current = pathname;
  }, [pathname]);

  return null;
}
