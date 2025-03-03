"use client";

import { useState } from "react";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Functionalities } from "@/sections/Functionalities";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { ContactModal } from "@/sections/ContactModal";
import { About } from "@/sections/About";
import { Resources } from "@/sections/Resources";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <LogoTicker />
      <ProductShowcase />
      <Functionalities />
      <About />
      <Resources />
      <Testimonials />
      <CallToAction onOpenModal={openModal} />
      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
