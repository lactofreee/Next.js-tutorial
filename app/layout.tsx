import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js | tutorial</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
