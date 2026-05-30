import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'un giorno | 熊本の隠れ家モダンイタリアン | 予約・記念日',
  description: '熊本市の隠れ家イタリアン「un giorno」。シェフ松岡秀貴が紡ぐ、季節の素材を生かしたモダンイタリアン。デートや記念日に相応しい、静かで洗練された空間。特別な一日を、LINEよりご予約ください。',
  keywords: ["熊本, イタリアン, レストラン, un giorno, 記念日, デート, 高級, モダンイタリアン, 予約, シェフ松岡秀貴"],
  openGraph: {
    "title": "un giorno | 熊本の隠れ家モダンイタリアン | 予約・記念日",
    "description": "熊本市の隠れ家イタリアン「un giorno」。シェフ松岡秀貴が紡ぐ、季節の素材を生かしたモダンイタリアン。デートや記念日に相応しい、静かで洗練された空間。特別な一日を、LINEよりご予約ください。",
    "url": "https://ungiorno.manus.space/",
    "siteName": "un giorno",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/boards-with-products-blank-space_23-2147612059.jpg",
        "alt": "un giorno restaurant exterior at night"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "un giorno | 熊本の隠れ家モダンイタリアン | 予約・記念日",
    "description": "熊本市の隠れ家イタリアン「un giorno」。シェフ松岡秀貴が紡ぐ、季節の素材を生かしたモダンイタリアン。デートや記念日に相応しい、静かで洗練された空間。特別な一日を、LINEよりご予約ください。",
    "images": [
      "http://img.b2bpic.net/free-photo/boards-with-products-blank-space_23-2147612059.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
