"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full pt-36 md:pt-48 pb-16 overflow-hidden">
      {/* Futuristic gradient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-background to-secondary/20 blur-3xl opacity-70" />

      <div className="space-y-8 text-center relative z-10">
        {/* Headline */}
        <div className="space-y-6 mx-auto px-4">
          <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl tracking-tight leading-tight">
            Unlock the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-glow">Career</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              You Deserve
            </span>
          </h1>
          <p className="mx-auto max-w-[650px] text-lg md:text-xl text-muted-foreground/90">
            Advance your career with personalized AI-powered tools, real-time
            insights, and smart interview prep — built to help you stand out.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 text-lg rounded-xl shadow-lg shadow-primary/40 hover:scale-105 transition-transform"
            >
              Start Your Journey
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-lg rounded-xl hover:bg-secondary/20 transition"
            >
               Watch Demo
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div
          ref={imageRef}
          className="hero-image mt-10 transform transition-all duration-700 hover:scale-[1.02]"
        >
          <Image
            src={"/banner.png"}
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-primary/20 mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
