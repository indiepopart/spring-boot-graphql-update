import WideLayout from '@/layout/WideLayout';
import { Ubuntu} from 'next/font/google';

const font = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <WideLayout>{children}</WideLayout>
      </body>
    </html>
  );
}