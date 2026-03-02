"use client";

import React from "react";
import { ShoppingCart, User, Search, Menu, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const categories = [
    { title: "Electronics", img: "/products/electronics.jpg" },
    { title: "Fashion", img: "/products/fashion.jpeg" },
    { title: "Home Goods", img: "/products/homegoods.png" },
    { title: "Sports", img: "/products/sports.jpg" },
    { title: "Beauty", img: "/products/beauty.avif" },
  ];

  const products = [
    { title: "Smartphone", img: "/products/electronics.jpg", price: "$250" },
    { title: "Sneakers", img: "/products/fashion.jpeg", price: "$75" },
    { title: "Blender", img: "/products/homegoods.png", price: "$60" },
    { title: "Football", img: "/products/sports.jpg", price: "$30" },
    { title: "Lipstick", img: "/products/lipstick.avif", price: "$15" },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5]/95 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/urubugaa.png"
              alt="Urubugaa Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-bold text-lg tracking-tight">Urubugaa</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#DA1736] transition">Home</a>
            <a href="#" className="hover:text-[#DA1736] transition">Shop</a>
            <a href="#" className="hover:text-[#DA1736] transition">Categories</a>
            <a href="#" className="hover:text-[#DA1736] transition">Deals</a>
            <a href="#" className="hover:text-[#DA1736] transition">Sell</a>
          </nav>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#DA1736]" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-[#DA1736]" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#DA1736]" />
            <User className="w-5 h-5 cursor-pointer hover:text-[#DA1736]" />
            <Menu className="w-6 h-6 md:hidden" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-3 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Shop Smarter <br /> <span className="text-[#DA1736]">Sell Faster</span>
            </motion.h1>

            <p className="text-black/70 text-lg mb-8 max-w-lg">
              Rwanda's modern marketplace built for trusted sellers and smart shoppers.
              Discover quality products with secure and fast checkout.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#DA1736] text-white rounded-2xl font-semibold hover:bg-[#B0152E] transition shadow-lg">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-[#DA1736] text-[#DA1736] rounded-2xl font-semibold hover:bg-[#DA1736] hover:text-white transition">
                Start Selling
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <img
                src="/hero-products.avif"
                alt="Marketplace"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
          <a href="#" className="text-sm font-semibold text-[#DA1736] hover:underline">View All</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#DA1736] transition cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-32 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-4 text-center font-medium group-hover:text-[#DA1736] transition">
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Products</h2>
          <a href="#" className="text-sm font-semibold text-[#DA1736] hover:underline">Browse All</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition group"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-44 w-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-[#F5F5F5] p-2 rounded-full border border-black/10 hover:border-[#DA1736] transition">
                  <Heart className="w-4 h-4 hover:text-[#DA1736]" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{product.title}</h3>
                <p className="font-bold text-[#DA1736] mb-4">{product.price}</p>
                <button className="w-full py-2 rounded-xl bg-[#DA1736] text-white text-sm font-semibold hover:bg-[#B0152E] transition">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-black/10 py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="font-bold mb-4 text-lg">Urubugaa</h3>
            <p className="text-black/70">
              Rwanda's trusted modern e-commerce platform connecting buyers and sellers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-black/70">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-black/70">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-xl border border-black/20 bg-white focus:outline-none focus:border-[#DA1736]"
              />
              <button className="px-4 py-2 bg-[#DA1736] text-white rounded-xl hover:bg-[#B0152E] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-black/60 mt-12 text-xs">
          © {new Date().getFullYear()} Urubugaa. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
