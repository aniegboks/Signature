import type { Metadata } from "next";
import { Cormorant_Infant, Dosis, Poppins } from "next/font/google";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio"; 
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PrismicPreview } from "@prismicio/next";
import { ReactLenis } from "@/utils/lenis";

const cormorantInfant = Cormorant_Infant({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-cormorant_infant",
  display: "swap",
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-dosis",
  display: "swap",
});


export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return {
      title: settings.data.site_title || "Keyvera alternate",
      description:
        settings.data.meta_description || "Experience the peak of real-estate",
      openGraph: {
        images: settings.data.og_image?.url
          ? [{ url: settings.data.og_image.url }]
          : [],
      },
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" love-deals="879BC0364EB9EBEE3DBE71B15E175613">
      <ReactLenis root>
        <body
          className={`${dosis.variable} ${cormorantInfant.variable} antialiased bg-white text-black`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </ReactLenis>
    </html>
  );
}
