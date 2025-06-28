
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const products = [
//   {
//     id: 1,
//     name: "Premium Cashmere Sweater",
//     price: 249.99,
//     discountPrice: 199.99,
//     description: "Luxurious 100% pure cashmere sweater with a relaxed fit.",
//     details: [
//       "100% Pure Cashmere",
//       "Handmade in Italy",
//       "Relaxed fit",
//       "Ribbed cuffs and hem",
//       "Dry clean only"
//     ],
//     colors: ["Navy Blue", "Charcoal Gray", "Camel"],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   {
//     id: 2,
//     name: "Banarasi Silk Kurta",
//     price: 199.99,
//     discountPrice: 159.99,
//     description: "Elegant Banarasi silk kurta with gold detailing.",
//     details: ["Banarasi silk", "Tailored fit", "Dry clean only"],
//     colors: ["Maroon", "Gold"],
//     sizes: ["S", "M", "L"],
//     images: [
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     id: 3,
//     name: "Designer Lehenga Choli",
//     price: 499.99,
//     discountPrice: 449.99,
//     description: "Perfect for weddings and festivals.",
//     details: ["Zari embroidery", "Chiffon dupatta"],
//     colors: ["Pink", "Peach"],
//     sizes: ["M", "L"],
//     images: [
//       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     id: 4,
//     name: "Traditional Anarkali Gown",
//     price: 299.99,
//     discountPrice: 269.99,
//     description: "Classic Indian Anarkali gown with flare.",
//     details: ["Cotton-silk blend", "Floor length"],
//     colors: ["Royal Blue", "Ivory"],
//     sizes: ["S", "M", "L", "XL"],
//     images: [
//       "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=80"
//     ]
//   }
// ];

// const getColorCode = (color) => {
//   switch (color) {
//     case 'Navy Blue': return '#001f3f';
//     case 'Charcoal Gray': return '#36454F';
//     case 'Camel': return '#C19A6B';
//     case 'Maroon': return '#800000';
//     case 'Gold': return '#FFD700';
//     case 'Pink': return '#FFC0CB';
//     case 'Peach': return '#FFDAB9';
//     case 'Royal Blue': return '#4169E1';
//     case 'Ivory': return '#FFFFF0';
//     default: return '#F5F5DC';
//   }
// };

// export default function ProductMenu() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Premium Collection</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover handcrafted luxury pieces that blend tradition with contemporary style
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div 
//               key={product.id}
//               className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               {/* Product Image */}
//               <div className="relative overflow-hidden aspect-square">
//                 <Image
//                   src={product.images[0]}
//                   alt={product.name}
//                   fill
//                   className={`object-cover transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-105' : 'scale-100'}`}
//                 />
//                 {product.discountPrice < product.price && (
//                   <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//                     SALE
//                   </div>
//                 )}
//               </div>

//               {/* Product Info */}
//               <div className="p-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
//                     <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//                   </div>
//                   {hoveredProduct === product.id && product.images.length > 1 && (
//                     <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition">
//                       View More
//                     </button>
//                   )}
//                 </div>

//                 {/* Price */}
//                 <div className="mt-3 flex items-center">
//                   <span className="text-lg font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
//                   {product.discountPrice < product.price && (
//                     <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
//                   )}
//                 </div>

//                 {/* Colors */}
//                 <div className="mt-2 flex items-center space-x-1">
//                   {product.colors.map((color, index) => (
//                     <div 
//                       key={index}
//                       className="w-4 h-4 rounded-full border border-gray-200"
//                       style={{ backgroundColor: getColorCode(color) }}
//                       title={color}
//                     />
//                   ))}
//                 </div>

//                 {/* Quick Actions */}
//                 <div className={`mt-4 grid grid-cols-2 gap-2 transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
//                   <Link
//                     href={`/products/${product.id}`}
//                     className="text-center py-2 px-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
//                   >
//                     View Details
//                   </Link>
//                   <button className="py-2 px-3 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 transition">
//                     Quick Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const products = [
//   {
//     id: 1,
//     name: "Premium Cashmere Sweater",
//     price: 249.99,
//     discountPrice: 199.99,
//     description: "Luxurious 100% pure cashmere sweater with a relaxed fit.",
//     details: ["100% Pure Cashmere", "Handmade in Italy", "Relaxed fit", "Ribbed cuffs and hem", "Dry clean only"],
//     colors: ["Navy Blue", "Charcoal Gray", "Camel"],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   {
//     id: 2,
//     name: "Banarasi Silk Kurta",
//     price: 199.99,
//     discountPrice: 159.99,
//     description: "Elegant Banarasi silk kurta with gold detailing.",
//     details: ["Banarasi silk", "Tailored fit", "Dry clean only"],
//     colors: ["Maroon", "Gold"],
//     sizes: ["S", "M", "L"],
//     images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"]
//   },
//   {
//     id: 3,
//     name: "Designer Lehenga Choli",
//     price: 499.99,
//     discountPrice: 449.99,
//     description: "Perfect for weddings and festivals.",
//     details: ["Zari embroidery", "Chiffon dupatta"],
//     colors: ["Pink", "Peach"],
//     sizes: ["M", "L"],
//     images: ["https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80"]
//   },
//   {
//     id: 4,
//     name: "Traditional Anarkali Gown",
//     price: 299.99,
//     discountPrice: 269.99,
//     description: "Classic Indian Anarkali gown with flare.",
//     details: ["Cotton-silk blend", "Floor length"],
//     colors: ["Royal Blue", "Ivory"],
//     sizes: ["S", "M", "L", "XL"],
//     images: ["https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=80"]
//   }
// ];

// const getColorCode = (color) => {
//   switch (color) {
//     case 'Navy Blue': return '#001f3f';
//     case 'Charcoal Gray': return '#36454F';
//     case 'Camel': return '#C19A6B';
//     case 'Maroon': return '#800000';
//     case 'Gold': return '#FFD700';
//     case 'Pink': return '#FFC0CB';
//     case 'Peach': return '#FFDAB9';
//     case 'Royal Blue': return '#4169E1';
//     case 'Ivory': return '#FFFFF0';
//     default: return '#F5F5DC';
//   }
// };

// export default function ProductMenu() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-2xl font-bold text-gray-900">Our Premium Collection</h2>
//           <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
//             Discover handcrafted luxury pieces that blend tradition with contemporary style.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden relative"
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               <div className="relative w-full aspect-square">
//                 <Image
//                   src={product.images[0]}
//                   alt={product.name}
//                   fill
//                   sizes="100vw"
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 {product.discountPrice < product.price && (
//                   <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
//                     SALE
//                   </div>
//                 )}
//               </div>

//               <div className="p-2">
//                 <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
//                 <p className="text-xs text-gray-500 truncate">{product.description}</p>

//                 <div className="flex items-center gap-1 mt-1">
//                   <span className="text-sm font-semibold text-gray-900">${product.discountPrice.toFixed(2)}</span>
//                   {product.discountPrice < product.price && (
//                     <span className="text-xs text-gray-500 line-through">${product.price.toFixed(2)}</span>
//                   )}
//                 </div>

//                 <div className="flex gap-1 mt-1">
//                   {product.colors.map((color, index) => (
//                     <span
//                       key={index}
//                       className="w-3 h-3 rounded-full border border-gray-300"
//                       style={{ backgroundColor: getColorCode(color) }}
//                       title={color}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             href="/products"
//             className="inline-block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


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
