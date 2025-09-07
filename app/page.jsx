"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { CardContent, Card } from "@/components/ui/card";
import { features} from "@/data/features";
import { howItworks } from "@/data/howItworks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Animation variants for smooth reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const numberVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const AnimatedFeatureCard = ({ feature }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="transform transition-transform duration-300 hover:scale-[1.03]"
    >
      <Card className="border-2 border-transparent hover:border-violet-500/50 hover:shadow-lg transition-all duration-300 bg-black/50 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        <CardContent className="pt-6 text-center flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center justify-center">
            <span className="mb-4 text-4xl text-violet-400 group-hover:text-cyan-400 transition-colors duration-300">
              {feature.icon}
            </span>
            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AnimatedStatCard = ({
  number,
  label,
}) => {
  return (
    <motion.div
      variants={numberVariants}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
        {number}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const CtaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
}  

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>

      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="space-y-4 text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Powerful Features for Your Career Growth
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl">
              Leverage the power of AI to supercharge your professional journey.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <AnimatedFeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatedStatCard number="50+" label="Industries Covered" />
            <AnimatedStatCard number="1000+" label="Interview Questions" />
            <AnimatedStatCard number="95%" label="Success Rate" />
            <AnimatedStatCard number="24/7" label="AI Support" />
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="relative w-full py-20 bg-background overflow-hidden">
      {/* Background Grid Effect */}
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Title with animated gradient */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
              bg-clip-text text-transparent animate-gradient-x">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Four futuristic steps to accelerate your career growth 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {howItworks.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl 
                bg-white/5 dark:bg-black/30 backdrop-blur-xl shadow-lg border border-white/10 
                hover:scale-105 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)] transition-all duration-500"
              >
                {/* Gradient Ring around Icon */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 blur-md opacity-60 group-hover:opacity-100 transition" />
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center 
                    bg-black/70 border border-white/10 shadow-inner">
                    <span className="text-primary text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-xl text-foreground group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="w-full py-16 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background/70 backdrop-blur-xl border border-primary/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-8 pb-6 px-6 flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-6">
                    {/* Avatar + Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <Image
                          width={56}
                          height={56}
                          src={testimonial.image}
                          alt={testimonial.author}
                          unoptimized
                          className="rounded-full object-cover border-2 border-primary/30 shadow-sm"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="relative px-6 py-4">
                      {/* Opening Quote */}
                      <span className="absolute -top-2 left-0 text-6xl text-primary opacity-20 font-serif leading-none">
                        “
                      </span>

                      {/* Quote Text */}
                      <p className="text-muted-foreground italic leading-relaxed relative z-10">
                        {testimonial.quote}
                      </p>

                      {/* Closing Quote */}
                      <span className="absolute -bottom-6 right-2 text-6xl text-primary opacity-20 font-serif leading-none">
                        ”
                      </span>
                    </blockquote>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full py-16 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Quick answers to guide your career journey with <span className="font-semibold text-primary">Gradia</span>
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-primary/10 border border-primary/10 rounded-xl shadow-lg bg-background/70 backdrop-blur-lg"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-4 md:px-6"
                >
                  <AccordionTrigger className="flex justify-between items-center text-left py-4 
             font-semibold text-lg rounded-lg
             transition-all duration-300
             hover:text-primary hover:bg-primary/5 hover:no-underline 
             focus:outline ">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-grid-white/[0.05] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto py-16 px-6 sm:px-12 rounded-3xl backdrop-blur-sm bg-black/40 border border-violet-500/30 shadow-2xl relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtle glowing border effect */}
          <div className="absolute inset-0 rounded-3xl z-0 transform scale-105 bg-gradient-to-r from-violet-500/50 via-cyan-400/50 to-purple-600/50 opacity-25 animate-pulse"></div>

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Accelerate</span> Your Career?
            </h2>

            {/* Subtitle */}
            <p className="mx-auto max-w-[650px] text-gray-300 md:text-xl leading-relaxed">
              Join thousands of professionals who are advancing their careers
              with <span className="font-semibold text-white">AI-powered guidance</span>.
            </p>

            {/* CTA Button */}
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 mt-6 rounded-full font-semibold text-white border-2 border-transparent bg-transparent hover:bg-transparent hover:border-violet-400/70 hover:scale-105 transition-all duration-300 shadow-md relative group overflow-hidden"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>



    </div>
  );
}