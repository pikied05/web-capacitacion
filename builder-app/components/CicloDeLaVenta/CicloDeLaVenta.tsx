/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Title from './Title';
import MetalifeButtons from './MetalifeButtons';
import Footer from './Footer';

interface CicloDeLaVentaProps {}

const CicloDeLaVenta: React.FC<CicloDeLaVentaProps> = () => {
  return (
    <main className="flex overflow-hidden flex-wrap items-start bg-gray-200">
      <Sidebar />
      <div className="flex flex-col min-w-[240px] w-[1393px] max-md:max-w-full">
        <Header />
        <Title />
        <MetalifeButtons />
        <Footer />
      </div>
    </main>
  );
};

export default CicloDeLaVenta;