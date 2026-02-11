import { Poppins } from "next/font/google";
import DigitalMarketingLandingPageClient from "./DigitalMarketingLandingPageClient";
import "@fortawesome/fontawesome-free/css/all.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "SmartWeb Solutions | Stop Overpaying for Websites",
  description:
    "Get professional, high-converting business websites for a fraction of typical agency prices. Starting at ₹5,000 with modern tech, SEO and lifetime support.",
};

export default function DigitalMarketingLandingPage() {
  return (
    <div className={poppins.className}>
      <DigitalMarketingLandingPageClient />
    </div>
  );
}


