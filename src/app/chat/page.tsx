"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Chatbot />
      <Footer />
    </div>
  );
}