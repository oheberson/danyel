import "./globals.css";

export const metadata = {
  title: "Danyel Pereira",
  description: "Violão Acústico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
