/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Title from './Title';
import OptionsGrid from './OptionsGrid';
import Footer from './Footer';

const CapacitacionPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-wrap items-start bg-gray-200">
      <Sidebar />
      <main className="flex flex-col grow shrink pb-28 min-h-[982px] min-w-[240px] w-[1369px] max-md:pb-24 max-md:max-w-full">
        <Header />
        <Title />
        <OptionsGrid />
        <Footer />
      </main>
    </div>
  );
};

export default CapacitacionPage;