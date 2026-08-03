import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { metadataBase } from "@/lib/site-metadata";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { MotionController } from "@/components/MotionController";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "@fontsource-variable/inter/wght.css";
import "../../public/assets/css/styles.css";
import "../../public/assets/css/cb-navbar.css";

export const metadata: Metadata = {
  metadataBase,
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#10110f" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="js">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">Skip to content</a>
          <CustomCursor />
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileCta />
          <MotionController />
        </MotionProvider>
      </body>
    </html>
  );
}
