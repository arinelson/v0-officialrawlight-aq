"use client"

import { useState, useEffect } from "react"

export function useDictionary(locale: string) {
  const [dict, setDict] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        setLoading(true)
        // Dynamic import for client-side loading
        const dictionary = await import(`../lib/dictionaries/${locale}.json`)
        setDict(dictionary.default)
      } catch (error) {
        console.error("Failed to load dictionary:", error)
        // Fallback to English
        try {
          const fallback = await import("../lib/dictionaries/en.json")
          setDict(fallback.default)
        } catch (fallbackError) {
          console.error("Failed to load fallback dictionary:", fallbackError)
          // Set minimal fallback
          setDict({
            site: { name: "LUZ CRUA" },
            nav: { home: "Home", posts: "Posts", about: "About", contact: "Contact" },
          })
        }
      } finally {
        setLoading(false)
      }
    }

    loadDictionary()
  }, [locale])

  return dict
}
