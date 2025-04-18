import type { Metadata } from "next";
import { Cormorant_Infant, Jost } from "next/font/google";
import "./globals.css";
import { createClient } from "@prismicio/client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

// Configure Cormorant Garamond for headings
const cormorant_infant = Cormorant_Infant({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",  // Added variable for CSS access
});

// Configure Urbanist for body text
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

type Props = {
  params: { id: string },
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
): Promise<Metadata> {
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
    <html lang="en">
      <body className={`${jost.variable} ${cormorant_infant.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}