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
import { Team } from "@/sections/Team";
import { Resources } from "@/sections/Resources";
import { ImageGallery } from "@/sections/ImageGallery";
import { CyberSecurity } from "@/sections/CyberSecurity";
import LeadMagnet from "@/sections/LeadMagnet";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <LogoTicker />
      <About />
      <ProductShowcase />
      <Functionalities />
      <LeadMagnet onOpenModal={openModal} />
      <Resources />
      <CyberSecurity />
      <Testimonials />
      <Team />
      <ImageGallery />
      <CallToAction onOpenModal={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
