"use client";

import React from 'react';
import ReadinessSurvey from "@/sections/ReadinessSurvey";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function SurveyPage() {
  return (
    <>
      <Header onOpenModal={() => {}} />
      <main>
        <ReadinessSurvey />
      </main>
      <Footer />
    </>
  );
} 