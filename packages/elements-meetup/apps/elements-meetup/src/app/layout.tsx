import './global.css';

export const metadata = {
  title: 'ElementsMeetup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="inovex-elements-theme inovex-elements-typo flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
