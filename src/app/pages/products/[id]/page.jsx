// import { useState } from 'react';

// const ProductPage = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('M');

//   const product = {
//     name: "Premium Cashmere Sweater",
//     price: 249.99,
//     discountPrice: 199.99,
//     description: "Luxurious 100% pure cashmere sweater with a relaxed fit. Handcrafted in Italy with exceptional attention to detail.",
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
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     ]
//   };

//   const nextImage = () => {
//     setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Image Gallery */}
//           <div className="md:w-1/2">
//             <div className="relative overflow-hidden rounded-lg bg-gray-50 h-96 md:h-[500px]">
//               <img 
//                 src={product.images[selectedImage]} 
//                 alt={product.name}
//                 className="w-full h-full object-contain object-center"
//               />
              
//               {/* Navigation Arrows */}
//               <button 
//                 onClick={prevImage}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
            
//             {/* Thumbnails */}
//             <div className="mt-4 grid grid-cols-4 gap-2">
//               {product.images.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`rounded-md overflow-hidden h-20 ${selectedImage === index ? 'ring-2 ring-indigo-500' : ''}`}
//                 >
//                   <img 
//                     src={img} 
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           {/* Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
//             {/* Price */}
//             <div className="mt-4">
//               <p className="text-2xl font-semibold text-gray-900">${product.discountPrice.toFixed(2)}</p>
//               {product.discountPrice < product.price && (
//                 <div className="flex items-center">
//                   <p className="text-lg text-gray-500 line-through mr-2">${product.price.toFixed(2)}</p>
//                   <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
//                     Save ${(product.price - product.discountPrice).toFixed(2)}
//                   </span>
//                 </div>
//               )}
//             </div>
            
//             {/* Description */}
//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Description</h3>
//               <p className="mt-2 text-gray-600">{product.description}</p>
//             </div>
            
//             {/* Colors */}
//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Color</h3>
//               <div className="flex space-x-2 mt-2">
//                 {product.colors.map((color) => (
//                   <button 
//                     key={color}
//                     className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50"
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Sizes */}
//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Size</h3>
//               <div className="grid grid-cols-5 gap-2 mt-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-3 py-2 border rounded-md text-center text-sm font-medium ${selectedSize === size ? 'bg-gray-900 text-white' : 'hover:bg-gray-50'}`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Quantity */}
//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
//               <div className="flex items-center mt-2">
//                 <button 
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="p-2 border rounded-l-md hover:bg-gray-50"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 <div className="px-4 py-2 border-t border-b text-center w-12">{quantity}</div>
//                 <button 
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="p-2 border rounded-r-md hover:bg-gray-50"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             {/* Action Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <button className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
//                 Add to Cart
//               </button>
//               <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
//                 Add to Wishlist
//               </button>
//             </div>
            
//             {/* Product Details */}
//             <div className="mt-10">
//               <h3 className="text-sm font-medium text-gray-900">Details</h3>
//               <ul className="mt-4 pl-4 list-disc text-sm text-gray-600 space-y-2">
//                 {product.details.map((detail, index) => (
//                   <li key={index}>{detail}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





'use client'

import { useState } from 'react';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const { id } = useParams(); // gets product ID from URL

  // Placeholder for real product data — ideally fetch this by ID
  const product = {
    id,
    name: "Premium Cashmere Sweater",
    price: 249.99,
    discountPrice: 199.99,
    description: "Luxurious 100% pure cashmere sweater with a relaxed fit.",
    details: [
      "100% Pure Cashmere",
      "Handmade in Italy",
      "Relaxed fit",
      "Ribbed cuffs and hem",
      "Dry clean only"
    ],
    colors: ["Navy Blue", "Charcoal Gray", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=80"
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const nextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Images */}
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg bg-gray-50 h-96 md:h-[500px]">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-contain object-center" />
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
                ←
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
                →
              </button>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button key={index} onClick={() => setSelectedImage(index)} className={`rounded-md overflow-hidden h-20 ${selectedImage === index ? 'ring-2 ring-indigo-500' : ''}`}>
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">${product.discountPrice.toFixed(2)}</p>
              {product.discountPrice < product.price && (
                <div className="flex items-center">
                  <p className="text-lg text-gray-500 line-through mr-2">${product.price.toFixed(2)}</p>
                  <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                    Save ${(product.price - product.discountPrice).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-3 py-2 border rounded-md text-sm ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center mt-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border rounded-l-md hover:bg-gray-100">-</button>
                <div className="px-4 py-2 border-t border-b text-center w-12">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 border rounded-r-md hover:bg-gray-100">+</button>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700">
                Add to Cart
              </button>
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-md hover:bg-gray-100">
                Add to Wishlist
              </button>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <ul className="mt-4 pl-4 list-disc text-sm text-gray-600 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
