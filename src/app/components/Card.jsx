// import React from "react";
// import "./styles.css";

// const Card = () => {
//   return (
//     <div className="card-container">
//       <div className="text-center">
//         <h1>Product Card</h1>
//         <span>
//           Created with <i className="zmdi zmdi-favorite red" /> By:{" "}
//           <strong>Deni Kurniawan</strong> From:{" "}
//           <i>
//             <a href="http://blog.wingerdstok.com" className="wsk-btn">
//               Wingerdstok
//             </a>
//           </i>
//         </span>
//       </div>

//       <div className="grid-container">
//         {products.map((product, index) => (
//           <div key={index} className="grid-item">
//             <div className="wsk-cp-product">
//               <div className="wsk-cp-img">
//                 <img src={product.image} alt="Product" />
//               </div>
//               <div className="wsk-cp-text">
//                 <div className="category">
//                   <span>{product.category}</span>
//                 </div>
//                 <div className="title-product">
//                   <h3>{product.title}</h3>
//                 </div>
//                 <div className="description-prod">
//                   <p>{product.description}</p>
//                 </div>
//                 <div className="card-footer">
//                   <div className="wcf-left">
//                     <span className="price">{product.price}</span>
//                   </div>
//                   <div className="wcf-right">
//                     <a href="#" className="buy-btn">
//                       <i className="zmdi zmdi-shopping-basket" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const products = [
//   {
//     image:
//       "https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg",
//     category: "Ethnic",
//     title: "My face not my heart",
//     description:
//       "Description Product tell me how to change playlist height size like 600px in html5 player.",
//     price: "Rp500.000",
//   },
//   {
//     image:
//       "https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg",
//     category: "Introvert",
//     title: "My face not my heart",
//     description:
//       "Description Product tell me how to change playlist height size like 600px in html5 player.",
//     price: "Rp500.000",
//   },
//   {
//     image:
//       "https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg",
//     category: "Beauty",
//     title: "My face not my heart",
//     description:
//       "Description Product tell me how to change playlist height size like 600px in html5 player.",
//     price: "Rp500.000",
//   },
//   {
//     image:
//       "https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg",
//     category: "Drama",
//     title: "My face not my heart",
//     description:
//       "Description Product tell me how to change playlist height size like 600px in html5 player.",
//     price: "Rp500.000",
//   },
// ];

// export default Card;


import React, { useState, useEffect } from "react";
import "./styles.css";

const Card = () => {
  // State to store products
  const [products, setProducts] = useState([]);

  // Simulating fetching JSON data
  useEffect(() => {
    const jsonData = [
      {
        "image": "https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg",
        "category": "Ethnic",
        "title": "My face not my heart",
        "description": "Description Product tell me how to change playlist height size like 600px in html5 player.",
        "price": "Rp500.000"
      },
      {
        "image": "https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg",
        "category": "Introvert",
        "title": "My face not my heart",
        "description": "Description Product tell me how to change playlist height size like 600px in html5 player.",
        "price": "Rp500.000"
      },
      {
        "image": "https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg",
        "category": "Beauty",
        "title": "My face not my heart",
        "description": "Description Product tell me how to change playlist height size like 600px in html5 player.",
        "price": "Rp500.000"
      },
      {
        "image": "https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg",
        "category": "Drama",
        "title": "My face not my heart",
        "description": "Description Product tell me how to change playlist height size like 600px in html5 player.",
        "price": "Rp500.000"
      }
    ];
    
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setProducts(jsonData);
    }, 500); // 0.5s delay to mimic loading
  }, []);

  return (
    <div className="card-container">
      <div className="text-center">
        <h1>Product Card</h1>
        <span>
          Created with <i className="zmdi zmdi-favorite red" /> By:{" "}
          <strong>Deni Kurniawan</strong> From:{" "}
          <i>
            <a href="http://blog.wingerdstok.com" className="wsk-btn">
              Wingerdstok
            </a>
          </i>
        </span>
      </div>

      <div className="grid-container">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="grid-item">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img src={product.image} alt="Product" />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>{product.category}</span>
                  </div>
                  <div className="title-product">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="description-prod">
                    <p>{product.description}</p>
                  </div>
                  <div className="card-footer">
                    <div className="wcf-left">
                      <span className="price">{product.price}</span>
                    </div>
                    <div className="wcf-right">
                      <a href="#" className="buy-btn">
                        <i className="zmdi zmdi-shopping-basket" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Card;
