'use client'

import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function HeroLandingPage() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-chocolate text-stone overflow-x-hidden relative">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-transparent to-transparent opacity-60" />
      </div>

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team/hero-main.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100dvh-4rem)] flex items-end pb-16 lg:pb-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="max-w-[700px]">
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              The growth partner
              <br />
              for high-stakes
              <br />
              AI decisions
            </h1>
            <p className="text-lg leading-relaxed text-rock mb-10 max-w-[500px]">
              We map how your business really runs, find where AI actually pays
              off, build it to fit, and stay as the tech moves.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/audit"
                className="group flex items-center gap-2.5 bg-vermilion text-chocolate py-3.5 px-7 rounded-full font-mono text-sm font-semibold uppercase tracking-[0.08em] hover:bg-vermilion/90 transition-all duration-200"
              >
                Get a free audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/how-we-work"
                className="text-rock py-3.5 px-7 font-mono text-sm font-medium uppercase tracking-[0.08em] hover:text-stone transition-colors duration-200"
              >
                How we work
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 lg:gap-16 items-end">
            <div className="text-center">
              <div className="text-[clamp(3rem,5vw,4rem)] font-bold leading-none mb-2 tracking-tight">40+</div>
              <div className="text-sm text-rock font-mono uppercase tracking-[0.08em]">AI systems shipped</div>
            </div>
            <div className="text-center">
              <div className="text-[clamp(3rem,5vw,4rem)] font-bold leading-none mb-2 tracking-tight">3M+</div>
              <div className="text-sm text-rock font-mono uppercase tracking-[0.08em]">Revenue generated</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
