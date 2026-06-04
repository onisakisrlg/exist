import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Cases from './components/Cases';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Cases />
      </main>
      
      <Footer />
    </div>
  );
}

