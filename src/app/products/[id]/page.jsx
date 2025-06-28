
// import products from '@/data/products.json';

// export default function ProductPage({ params }) {
//   const { id } = params;
//   const product = products.find(p => p.id.toString() === id);

//   if (!product) {
//     return <div className="text-center py-20 text-red-600">Product Not Found</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <div className="grid md:grid-cols-2 gap-8">
//         <img
//           src={product.images[0]}
//           alt={product.name}
//           className="w-full rounded-xl object-cover"
//         />
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="mt-2 text-gray-600">{product.description}</p>
//           <p className="mt-4 text-xl font-semibold text-gray-900">${product.discountPrice.toFixed(2)}</p>
//           {product.discountPrice < product.price && (
//             <p className="text-sm line-through text-gray-400">${product.price.toFixed(2)}</p>
//           )}

//           <div className="mt-6">
//             <h3 className="font-medium">Details:</h3>
//             <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
//               {product.details.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import { useParams } from 'next/navigation';
// import products from '@/data/products.json';

// export default function ProductPage() {
//   const { id } = useParams();
//   const product = products.find(p => p.id.toString() === id);

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('M');

//   if (!product) {
//     return (
//       <div className="text-center py-20 text-red-600 text-lg">
//         Product not found.
//       </div>
//     );
//   }

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
//           {/* Images */}
//           <div className="md:w-1/2">
//             <div className="relative overflow-hidden rounded-lg bg-gray-50 h-96 md:h-[500px]">
//               <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-contain object-center" />
//               <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
//                 ←
//               </button>
//               <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
//                 →
//               </button>
//             </div>
//             <div className="mt-4 grid grid-cols-4 gap-2">
//               {product.images.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`rounded-md overflow-hidden h-20 ${selectedImage === index ? 'ring-2 ring-indigo-500' : ''}`}
//                 >
//                   <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
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

//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Size</h3>
//               <div className="grid grid-cols-5 gap-2 mt-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-3 py-2 border rounded-md text-sm ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
//               <div className="flex items-center mt-2">
//                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border rounded-l-md hover:bg-gray-100">-</button>
//                 <div className="px-4 py-2 border-t border-b text-center w-12">{quantity}</div>
//                 <button onClick={() => setQuantity(quantity + 1)} className="p-2 border rounded-r-md hover:bg-gray-100">+</button>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <button className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700">
//                 Add to Cart
//               </button>
//               <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-md hover:bg-gray-100">
//                 Add to Wishlist
//               </button>
//             </div>

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
// }





'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import products from '@/data/products.json';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-red-600 text-lg">
        Product not found.
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setShowPopup(false);
    alert(`Added to cart: ${formData.name} (${formData.email})`);
  };

  return (
    <>
      {/* Product Page */}
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Images */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-lg bg-gray-50 h-96 md:h-[500px]">
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-contain object-center" />
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">←</button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">→</button>
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
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 border rounded-md text-sm ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                    >
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
                <button onClick={() => setShowPopup(true)} className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700">
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

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Confirm Add to Cart
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

