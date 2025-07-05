// import { useEffect, useState } from "react";

// export default function Carousel() {
//   const [swiperLoaded, setSwiperLoaded] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js";
//     script.async = true;
//     script.onload = () => {
//       setSwiperLoaded(true);
//       new Swiper(".swiper", {
//         effect: "coverflow",
//         grabCursor: true,
//         centeredSlides: true,
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 3,
//           slideShadows: true,
//         },
//         keyboard: { enabled: true },
//         mousewheel: { thresholdDelta: 70 },
//         loop: true,
//         pagination: { el: ".swiper-pagination", clickable: true },
  
//         // ⏳ **Autoplay Configuration**
//         autoplay: {
//           delay: 3000, // Slide changes every 3 seconds
//           disableOnInteraction: false, // Keeps autoplay running after manual interactions
//         },
  
//         breakpoints: {
//           480: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         },
//       });
//     };
//     document.body.appendChild(script);
//   }, []);
  

//   return (
//     <main className="container">
//       <div className="content-wrapper">
//         {/* Left Side: Text Content */}
//         <div className="text-content">
//           <span className="location">LAXMI NAGAR, NEW DELHI</span>
//           <h1 className="title">Stich & Glow - A Premium Suite</h1>
//           <hr className="divider" />
//           <p className="description">
//             Beauty and mystery are hidden in the beautiful waters that surround the St. Petersburg and Tampa regions.
//           </p>
//           <a href="#" className="cta-button">CHECK AVAILABILITY</a>
//         </div>

//         {/* Right Side: Swiper Carousel */}
//         <div className="carousel-wrapper">
//           <div className="swiper">
//             <div className="swiper-wrapper">
//               {[
//                 { title: "Jellyfish", desc: "Jellyfish are marine creatures.", link: "https://en.wikipedia.org/wiki/Jellyfish", img: "https://images.unsplash.com/photo-1628944682084-831f35256163?auto=format&fit=crop&w=687&q=80" },
//                 { title: "Seahorse", desc: "Experience the magic of a Florida sunset.", link: "https://en.wikipedia.org/wiki/Seahorse", img: "https://images.unsplash.com/photo-1515309025403-4b0184873cef?auto=format&fit=crop&w=735&q=80" },
//                 { title: "Octopus", desc: "Octopuses inhabit various ocean regions.", link: "https://en.wikipedia.org/wiki/Octopus", img: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=1170&q=80" },
//                 { title: "Shark", desc: "Sharks are a group of fish with a cartilaginous skeleton.", link: "https://en.wikipedia.org/wiki/Shark", img: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&w=1170&q=80" },
//                 { title: "Dolphin", desc: "Dolphins are widespread and intelligent marine animals.", link: "https://en.wikipedia.org/wiki/Dolphin", img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=765&q=80" },
//               ].map((slide, index) => (
//                 <div key={index} className="swiper-slide" style={{ backgroundImage: `url(${slide.img})` }}>
//                   <div className="slide-content">
//                     <h2>{slide.title}</h2>
//                     <p>{slide.desc}</p>
//                     <a href={slide.link} target="_blank" rel="noopener noreferrer">Explore</a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>
//         </div>
//       </div>

//       {/* Swiper CSS */}
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

//       {/* Background Images */}
//       <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg-img top-left" />
//       <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg-img bottom-right" />

//       {/* Responsive Styles */}
//       <style>{`
//         /* General Styles */
//         .container {
//           width: 90%;
//           margin: auto;
//           min-height: 100vh;
//           padding-top: 3rem;
//         }
//         .content-wrapper {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           gap: 40px;
//           flex-wrap: wrap;
//         }

//         /* Left Side: Text Content */
//         .text-content {
//           flex: 1;
//           max-width: 40%;
//           min-width: 300px;
//         }
//         .location {
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//           color: #717171;
//         }
//         .title {
//           text-transform: capitalize;
//           font-family: Roboto, sans-serif;
//           font-weight: 900;
//           font-size: 3rem;
//           background: linear-gradient(45deg, #005baa, #000000);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .divider {
//           background: #005baa;
//           height: 4px;
//           width: 100px;
//           border: none;
//           margin: 20px 0;
//         }
//         .description {
//           line-height: 1.6;
//         }
//         .cta-button {
//           display: inline-block;
//           text-decoration: none;
//           padding: 10px 20px;
//           border: 2px solid #c2c2c2;
//           border-radius: 20px;
//           color: #333;
//         }

//         /* Right Side: Swiper Carousel */
//         .carousel-wrapper {
//           flex: 1;
//           max-width: 60%;
//         }
//         .swiper {
//           height: 500px;
//         }
//         .swiper-slide {
//           background-size: cover;
//           background-position: center;
//           color: #fff;
//           padding: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//         }
//         .slide-content h2 {
//           margin: 0;
//         }
//         .slide-content p {
//           margin: 5px 0;
//         }
//         .slide-content a {
//           color: #fff;
//           text-decoration: underline;
//         }

//         /* Background Images */
//         .bg-img {
//           position: fixed;
//           opacity: 0.1;
//           z-index: -1;
//         }
//         .top-left {
//           top: -4rem;
//           left: -12rem;
//         }
//         .bottom-right {
//           bottom: -2rem;
//           right: -3rem;
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .content-wrapper {
//             flex-direction: column;
//           }
//           .text-content,
//           .carousel-wrapper {
//             max-width: 100%;
//           }
//           .swiper {
//             height: 400px;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }



// import { useState } from "react";

// export default function BeautySalon() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="beauty-salon">
//       {/* Navigation */}
//       {/* <nav className="navbar">
//         <div className="container">
//           <a href="#" className="logo">Stitch & Glow</a>
//           <button 
//             className={`menu-toggle ${menuOpen ? 'open' : ''}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span><span></span><span></span>
//           </button>
//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <a href="#services">Services</a>
//             <a href="#about">About</a>
//             <a href="#gallery">Gallery</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="overlay"></div>
//         <div className="container">
//           <div className="hero-content">
//             <div className="glass-card">
//               <p className="location">📍 LAXMI NAGAR, NEW DELHI</p>
//               <h1>Elevate Your Beauty</h1>
//               <p className="subtitle">Luxury salon experience tailored just for you.</p>
//               <div className="cta">
//                 <a href="#booking" className="btn primary">Book Now</a>
//                 <a href="#services" className="btn secondary">Explore Services</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         :root {
//           --primary: #a9745c;
//           --secondary: #fff7f0;
//           --text-dark: #3e3e3e;
//           --white: #ffffff;
//           --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           --transition: 0.3s ease;
//         }

//         *, *::before, *::after {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Playfair Display', serif;
//           background-color: var(--secondary);
//           color: var(--text-dark);
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//         }

//         /* Navbar */
//         .navbar {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           padding: 1rem 0;
//           backdrop-filter: blur(10px);
//           background: rgba(255, 255, 255, 0.7);
//           z-index: 100;
//           box-shadow: var(--shadow);
//         }

//         .navbar .container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .logo {
//           font-size: 1.8rem;
//           font-weight: bold;
//           text-decoration: none;
//           color: var(--primary);
//         }

//         .menu-toggle {
//           width: 25px;
//           height: 20px;
//           background: none;
//           border: none;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           cursor: pointer;
//         }

//         .menu-toggle span {
//           width: 100%;
//           height: 2px;
//           background: var(--primary);
//           transition: var(--transition);
//         }

//         .menu-toggle.open span:nth-child(1) {
//           transform: rotate(45deg) translateY(8px);
//         }

//         .menu-toggle.open span:nth-child(2) {
//           opacity: 0;
//         }

//         .menu-toggle.open span:nth-child(3) {
//           transform: rotate(-45deg) translateY(-8px);
//         }

//         .nav-links {
//           position: fixed;
//           right: -100%;
//           top: 0;
//           width: 70%;
//           height: 100vh;
//           background: var(--white);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           transition: var(--transition);
//         }

//         .nav-links.open {
//           right: 0;
//         }

//         .nav-links a {
//           font-size: 1.2rem;
//           color: var(--text-dark);
//           text-decoration: none;
//           transition: var(--transition);
//         }

//         .nav-links a:hover {
//           color: var(--primary);
//         }

//         /* Hero */
//         .hero {
//           height: 100vh;
//           background: url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           padding-top: 5rem;
//         }

//         .overlay {
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: rgba(0, 0, 0, 0.3);
//         }

//         .hero-content {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           padding: 2rem 3rem;
//           border-radius: 1rem;
//           box-shadow: var(--shadow);
//           color: var(--white);
//         }

//         .glass-card h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .glass-card .subtitle {
//           font-size: 1.2rem;
//           margin-bottom: 2rem;
//         }

//         .location {
//           font-size: 0.9rem;
//           margin-bottom: 0.5rem;
//           color: #fce3cf;
//         }

//         .cta {
//           display: flex;
//           gap: 1rem;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .btn {
//           padding: 0.75rem 1.5rem;
//           border-radius: 50px;
//           font-weight: bold;
//           text-decoration: none;
//           transition: var(--transition);
//         }

//         .btn.primary {
//           background: var(--primary);
//           color: var(--white);
//         }

//         .btn.secondary {
//           border: 2px solid var(--white);
//           color: var(--white);
//         }

//         .btn:hover {
//           opacity: 0.9;
//         }

//         @media (min-width: 768px) {
//           .menu-toggle {
//             display: none;
//           }

//           .nav-links {
//             position: static;
//             flex-direction: row;
//             height: auto;
//             background: transparent;
//             gap: 2rem;
//           }

//           .hero-content h1 {
//             font-size: 4rem;
//           }
//         }

//         @media (min-width: 1024px) {
//           .glass-card {
//             max-width: 600px;
//           }

//           .glass-card h1 {
//             font-size: 4.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState } from "react";

// export default function BeautySalon() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="beauty-salon">
    

//       {/* Hero Section with Video */}
//       <section className="hero">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="hero-video"
//         >
//           <source src="/videos/videoplayback.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="overlay"></div>
//         <div className="container hero-content">
//   <div className="glass-card">
//     <div className="location-tag">📍 Laxmi Nagar, New Delhi</div>
//     <h1 className="hero-title">
//       <span className="brand-name">Stich & Glow</span>
//     </h1>
//     <p className="hero-subtitle">Luxury salon experience tailored just for you.</p>
//     <div className="cta-group">
//       <a href="#booking" className="btn btn-primary">Book Now</a>
//       <a href="#services" className="btn btn-outline">Explore Services</a>
//     </div>
//   </div>
// </div>

//       </section>

//       {/* Styles */}
//       <style jsx>{`
//         :root {
//           --primary: #8b5a2b;
//           --primary-light: #d4a373;
//           --secondary: #5a524b;
//           --light: #f9f5f0;
//           --dark: #2d2d2d;
//           --gray: #7a6b5d;
//           --white: #ffffff;
//           --shadow: 0 4px 20px rgba(0,0,0,0.1);
//           --transition: all 0.3s ease;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Poppins', sans-serif;
//           color: var(--dark);
//           background-color: var(--light);
//         }

//         .container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//         }

//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           padding: 1.5rem 0;
//           background-color: var(--white);
//           box-shadow: var(--shadow);
//           z-index: 1000;
//         }

//         .navbar .container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .logo {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: var(--primary);
//           text-decoration: none;
//         }

//         .menu-toggle {
//           width: 30px;
//           height: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           background: none;
//           border: none;
//           cursor: pointer;
//         }

//         .menu-toggle span {
//           height: 2px;
//           background-color: var(--primary);
//           transition: var(--transition);
//         }

//         .menu-toggle.open span:nth-child(1) {
//           transform: translateY(9px) rotate(45deg);
//         }
//         .menu-toggle.open span:nth-child(2) {
//           opacity: 0;
//         }
//         .menu-toggle.open span:nth-child(3) {
//           transform: translateY(-9px) rotate(-45deg);
//         }

//         .nav-links {
//           position: fixed;
//           top: 0;
//           right: -100%;
//           width: 70%;
//           height: 100vh;
//           background-color: var(--white);
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 2rem;
//           transition: var(--transition);
//           z-index: 999;
//         }

//         .nav-links.open {
//           right: 0;
//         }

//         .nav-links a {
//           text-decoration: none;
//           font-size: 1.2rem;
//           font-weight: 500;
//           color: var(--dark);
//         }

//         .nav-links a:hover {
//           color: var(--primary);
//         }

//         /* Hero with Video */
//         .hero {
//           position: relative;
//           height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .hero-video {
//           position: absolute;
//           top: 0;
//           left: 0;
//           height: 100%;
//           width: 100%;
//           object-fit: cover;
//           z-index: 0;
//           opacity: 0.8;
//         }

//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.4);
//           z-index: 1;
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.15);
//           padding: 2rem;
//           border-radius: 1rem;
//           backdrop-filter: blur(10px);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
//           max-width: 90%;
//         }

//         .location {
//           color: #fff;
//           font-weight: 500;
//           font-size: 0.9rem;
//         }

//         h1 {
//           font-size: 2.5rem;
//           background: linear-gradient(45deg, var(--primary), var(--primary-light));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .subtitle {
//           color: #fff;
//           font-size: 1.2rem;
//           margin-bottom: 1rem;
//         }

//         .cta-buttons {
//           display: flex;
//           gap: 1rem;
//           justify-content: center;
//           flex-wrap: wrap;
//         }

//         .primary-button, .secondary-button {
//           padding: 0.8rem 1.5rem;
//           border-radius: 50px;
//           text-decoration: none;
//           font-weight: 600;
//           transition: var(--transition);
//         }

//         .primary-button {
//           background: linear-gradient(45deg, var(--primary), var(--primary-light));
//           color: var(--white);
//         }

//         .primary-button:hover {
//           transform: translateY(-3px);
//         }

//         .secondary-button {
//           border: 2px solid var(--white);
//           color: var(--white);
//           background: transparent;
//         }

//         .secondary-button:hover {
//           background-color: rgba(255, 255, 255, 0.1);
//         }

//         @media (min-width: 768px) {
//           .menu-toggle {
//             display: none;
//           }

//           .nav-links {
//             position: static;
//             flex-direction: row;
//             height: auto;
//             background: none;
//             gap: 2rem;
//           }

//           .hero h1 {
//             font-size: 3.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";

export default function BeautySalon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 4000); // 4-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="beauty-salon">
      {/* Hero Section with Video */}
      <section className="hero">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="hero-video"
          preload="auto"
        >
          <source src="/videos/stich&glow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="container hero-content">
          <div className="glass-card">
            <div className="location-tag">📍 Laxmi Nagar, New Delhi</div>
            <h1 className="hero-title">
              <span className="brand-name">Stich & Glow</span>
            </h1>
            <p className="hero-subtitle">Luxury salon experience tailored just for you.</p>
            <div className="cta-group">
              <a href="#booking" className="btn btn-primary">Book Now</a>
              <a href="#services" className="btn btn-outline">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        :root {
          --primary: #8b5a2b;
          --primary-light: #d4a373;
          --secondary: #5a524b;
          --light: #f9f5f0;
          --dark: #2d2d2d;
          --gray: #7a6b5d;
          --white: #ffffff;
          --shadow: 0 4px 20px rgba(0,0,0,0.1);
          --transition: all 0.3s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--dark);
          background-color: var(--light);
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          background-color: var(--white);
          box-shadow: var(--shadow);
          z-index: 1000;
        }

        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .menu-toggle {
          width: 30px;
          height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-toggle span {
          height: 2px;
          background-color: var(--primary);
          transition: var(--transition);
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .nav-links {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          height: 100vh;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          transition: var(--transition);
          z-index: 999;
        }

        .nav-links.open {
          right: 0;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--dark);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        /* Hero with Video */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.8;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          max-width: 90%;
        }

        .location {
          color: #fff;
          font-weight: 500;
          font-size: 0.9rem;
        }

        h1 {
          font-size: 2.5rem;
          background: linear-gradient(45deg, var(--primary), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primary-button, .secondary-button {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .primary-button {
          background: linear-gradient(45deg, var(--primary), var(--primary-light));
          color: var(--white);
        }

        .primary-button:hover {
          transform: translateY(-3px);
        }

        .secondary-button {
          border: 2px solid var(--white);
          color: var(--white);
          background: transparent;
        }

        .secondary-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 768px) {
          .menu-toggle {
            display: none;
          }

          .nav-links {
            position: static;
            flex-direction: row;
            height: auto;
            background: none;
            gap: 2rem;
          }

          .hero h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
}
