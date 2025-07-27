import type { Metadata } from "next";
import { Cormorant_Infant, Urbanist } from "next/font/google";
import "./globals.css";
import { createClient } from "@prismicio/client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { ReactLenis } from '@/utils/lenis';

const cormorant_infant = Cormorant_Infant({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant", 
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap", 
});



export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createClient(repositoryName);
    const settings = await client.getSingle("settings");

    return {
      title: settings.data.site_title || "Keyvera alternate",
      description: settings.data.meta_description || "Experience the peak of real-estate",
      openGraph: {
        images: settings.data.og_image?.url ? [{ url: settings.data.og_image.url }] : [],
      }
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Keyvera alternate",
      description: "Experience the peak of real-estate",
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" love-deals="879BC0364EB9EBEE3DBE71B15E175613">
      <ReactLenis root>
        <body className={`${urbanist.variable} ${cormorant_infant.variable} antialiased`}>
          <Header />
          <main>{children}</main>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </ReactLenis>
    </html>
  );
}
