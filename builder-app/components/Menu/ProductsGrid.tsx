/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import OptionFrame from './OptionFrame';
import ProductButton from './ProductButton';

const ProductsGrid: React.FC = () => {
  const products = [
    { id: 1, title: 'Procesos operativos', image: 'https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/a618e67afa1e9dc191e5982d4834ea50b740c469ec8f17205f65d3fab19756fd?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&' },
    { id: 2, title: 'ciclo de venta', image: 'https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/4c594dbc925caa7e81fbdebdfd1e7967e5456f7f50c2db670f902b89811d85a3?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&' },
    { id: 3, title: 'Producto', image: 'https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/da416085feb0cd34348b39d5756b4a77e6a9b51c9a192f69efa1e03e6be06841?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&' },
    { id: 4, title: 'capacitación del lunes', image: 'https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/09e1244185494151df0a7c62010c1826e697175073c45404d19a2ef745aee79c?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&' },
    { id: 5, title: 'cuaderno de bonos', image: 'https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/1a07b430b7b5fb571ea48e0fe8288e08f55aa97ff671b80ff3318866881ed39d?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&' },
  ];

  return (
    <div className="flex flex-col items-end mt-10 max-w-full w-[1297px]">
      <div className="flex flex-col pb-6 w-full">
        <div className="flex z-10 flex-col self-center max-w-full text-5xl tracking-wider leading-10 text-center text-indigo-800 w-[782px] max-md:text-4xl max-md:leading-10">
          {products.slice(0, 2).map((product) => (
            <OptionFrame key={product.id} title={product.title} image={product.image} />
          ))}
        </div>
        <div className="flex flex-col mt-0 w-full max-md:mt-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center self-center max-md:max-w-full">
            <ProductButton />
            <ProductButton />
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-6 w-full max-md:max-w-full">
            <ProductButton />
            <ProductButton />
            <ProductButton />
          </div>
        </div>
        {products.slice(2).map((product) => (
          <OptionFrame key={product.id} title={product.title} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;