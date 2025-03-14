"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Check if the browser supports IntersectionObserver
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // If not supported or user prefers reduced motion, make all elements visible
      document.querySelectorAll(".scroll-fade-in").forEach((el) => {
        el.classList.add("visible")
      })
      return
    }

    // Create new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Once the animation is triggered, we don't need to observe this element anymore
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    // Observe all elements with the scroll-fade-in class
    document.querySelectorAll(".scroll-fade-in").forEach((el) => {
      observerRef.current?.observe(el)
    })

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return null
}

