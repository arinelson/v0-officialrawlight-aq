"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface AdSenseProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  style?: React.CSSProperties
  responsive?: boolean
  className?: string
}

export default function AdSense({
  slot,
  format = "auto",
  style = {},
  responsive = true,
  className = "",
}: AdSenseProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Inicializa o anúncio quando o componente montar
    try {
      if (adRef.current && typeof window !== "undefined" && window.adsbygoogle) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-8357117612559558"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
