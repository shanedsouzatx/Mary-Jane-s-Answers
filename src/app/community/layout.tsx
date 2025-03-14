import type React from "react"
import ScrollAnimations from "./ScrollAnimation"

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <ScrollAnimations />
    </>
  )
}

