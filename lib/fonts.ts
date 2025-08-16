import { Cormorant, DM_Sans } from "next/font/google";

// Configure Cormorant for headings
export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-cormorant", // CSS variable for Tailwind
});

// Configure DM Sans for other texts
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
  variable: "--font-dm-sans", // CSS variable for Tailwind
});
