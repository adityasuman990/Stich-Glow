

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';

const getColorCode = (color) => {
  switch (color) {
    case 'Navy Blue': return '#001f3f';
    case 'Charcoal Gray': return '#36454F';
    case 'Camel': return '#C19A6B';
    case 'Maroon': return '#800000';
    case 'Gold': return '#FFD700';
    case 'Pink': return '#FFC0CB';
    case 'Peach': return '#FFDAB9';
    case 'Royal Blue': return '#4169E1';
    case 'Ivory': return '#FFFFF0';
    default: return '#F5F5DC';
  }
};

export default function ProductMenu() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Our Premium Collection</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
            Discover handcrafted luxury pieces that blend tradition with contemporary style.
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div
                className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  {product.discountPrice < product.price && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      SALE
                    </div>
                  )}
                </div>

                <div className="p-2">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{product.description}</p>

                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-semibold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                    {product.discountPrice < product.price && (
                      <span className="text-xs text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    )}
                  </div>

                  <div className="flex gap-1 mt-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: getColorCode(color) }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
