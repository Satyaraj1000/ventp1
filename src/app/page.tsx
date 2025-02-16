'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ProductCard from "@/components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero Section with Slider */}
      <section className="w-full lg:h-1/2 flex items-center justify-center p-6 md:p-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper h-full"
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="p-6 h-full bg-gradient-to-br from-[#0E9696] to-[#043030] rounded-lg shadow-md items-center"
            >
              <div className="flex items-center justify-center h-1/4">
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-100 p-2">
                  {product.name}
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center justify-center h-3/4 my-6">
                {product.images.map((img, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <Image
                      src={img}
                      alt={`${product.name} Image ${idx + 1}`}
                      width={350}
                      height={200}
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Content Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-5 md:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-4 md:mb-8 bg-gradient-to-b from-[#0E9696] to-[#043030] bg-clip-text text-transparent">
              Welcome to Protective Coating World
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
              M/s. VAIBHAVI ENTERPRISES is a fast-growing company with a strong
              focus on quality & best customer service. Since 1989, our
              organization has been acknowledged as a leader in development &
              advancement of surface enhancement 'Viflon' (Fluoropolymer) coating
              for metal surfaces & other substrates. We are also a manufacturer of
              'Vaicon' Porus Plastics filter media especially for pharmaceutical,
              Chemical & Pneumatics companies for their different applications.
            </p>
          </div>

          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-12">
            <span className="h-2 bg-primary flex-1"></span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black whitespace-nowrap px-4">
              Our Products
            </h2>
            <span className="h-2 bg-primary flex-1"></span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}