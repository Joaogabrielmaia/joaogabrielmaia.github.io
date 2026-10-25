import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1>404</h1>
        <p>Página não encontrada · Page not found</p>
        <p>
          <Link href="/">Início</Link> · <Link href="/en">Home</Link>
        </p>
      </body>
    </html>
  );
}
