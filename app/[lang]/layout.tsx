import type React from "react"
import { Inter } from "next/font/google"
import { getDictionary } from "@/lib/dictionaries"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CountryDetector from "@/components/country-detector"
import ReadingProgress from "@/components/reading-progress"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import Script from "next/script"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

// Default fallback dictionary
const defaultDict = {
  site: { name: "LUZ CRUA", description: "Conexão profunda com Deus" },
  nav: {
    home: "Home",
    posts: "Posts",
    about: "About",
    contact: "Contact",
    webstories: "WebStories",
    tags: "Tags",
    search: "Search",
  },
  language: { select: "Select Language", autoDetect: "Auto-detect" },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
}

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "pt" },
    { lang: "es" },
    { lang: "de" },
    { lang: "fr" },
    { lang: "it" },
    { lang: "fil" },
  ]
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params

  let dict = defaultDict
  try {
    const loadedDict = await getDictionary(lang)
    dict = { ...defaultDict, ...loadedDict }
  } catch (error) {
    console.error("Error loading dictionary for metadata:", error)
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"

  return {
    title: dict.site.name,
    description: dict.site.description,
    openGraph: {
      title: dict.site.name,
      description: dict.site.description,
      url: `${baseUrl}/${lang}`,
      siteName: dict.site.name,
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params

  let dict = defaultDict
  try {
    const loadedDict = await getDictionary(lang)
    dict = { ...defaultDict, ...loadedDict }
  } catch (error) {
    console.error("Error loading dictionary in layout:", error)
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"
  const supportedLanguages = ["en", "pt", "es", "de", "fr", "it", "fil"]

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WMV4SC5X6S" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMV4SC5X6S');
          `}
        </Script>

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Hreflang tags for international SEO */}
        {supportedLanguages.map((langCode) => (
          <link key={langCode} rel="alternate" href={`${baseUrl}/${langCode}`} hrefLang={langCode} />
        ))}
        <link rel="alternate" href={`${baseUrl}/en`} hrefLang="x-default" />

        {/* AdSense verification script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8357117612559558"
          crossOrigin="anonymous"
        />

        {/* RSS feed link */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`/rss/${lang}.xml`}
          title={`${dict.site.name} - RSS Feed (${lang.toUpperCase()})`}
        />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: dict.site.name,
              url: `${baseUrl}/${lang}`,
              potentialAction: {
                "@type": "SearchAction",
                target: `${baseUrl}/${lang}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CountryDetector />
          <div className="relative flex min-h-screen flex-col">
            <Header dict={dict} lang={lang} />
            <main className="flex-1 container mx-auto px-4 py-8">
              <ReadingProgress />
              {children}
            </main>
            <Footer dict={dict} lang={lang} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
