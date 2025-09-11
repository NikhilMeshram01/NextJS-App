'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import MainBall from '@/components/animate/MainBall';
import Hero from '@/components/section/Hero';
import Product from '@/components/section/Product';
import Testimonials from '@/components/section/Testimonials';
import SuccessStories from '@/components/section/SuccessStories';
import Technologies from '@/components/section/Technologies';
import FeaturedInsights from '@/components/section/FeaturedInsights';
import Contact from '@/components/section/Contact';
import Footer from '@/components/section/Footer';






export default function HomePage() {






  return (
    <div className="w-full min-h-screen bg-[#151a2c] relative">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/img_texture.png"
          alt="Background Texture"
          className="absolute top-0 left-0 w-full h-[600px] sm:h-[800px] md:h-[1024px] object-cover opacity-50"
        />
        <img
          src="/images/img_group_20469.png"
          alt="Background Pattern"
          className="absolute top-[800px] sm:top-[1200px] md:top-[1691px] left-0 w-full h-[2000px] sm:h-[2800px] md:h-[3490px] object-cover opacity-30"
        />
      </div>
      {/* Main Content */}
      <div className="z-10 relative">
        <Header />
        <Hero />
        <Product />
        <Testimonials />
        <SuccessStories />
        <Technologies />
        <FeaturedInsights />
        <Contact />
        <Footer />
      </div >
    </div >
  );
}