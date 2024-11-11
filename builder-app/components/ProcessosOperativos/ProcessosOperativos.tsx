/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Title from './Title';
import InteractiveGrid from './InteractiveGrid';
import Footer from './Footer';

const ProcessosOperativos: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-wrap items-start bg-gray-200">
      <Sidebar />
      <div className="flex flex-col grow shrink min-w-[240px] w-[1368px] max-md:max-w-full">
        <Header />
        <Title />
        <InteractiveGrid />
        <Footer />
      </div>
    </div>
  );
};

export default ProcessosOperativos;