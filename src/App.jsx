import React from 'react';
import Header from './components/Header';
import ThemeToggle from "./components/ThemeToggle";
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <Header />
      <ThemeToggle />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
