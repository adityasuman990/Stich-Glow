import { useEffect, useState } from "react";

export default function Carousel() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js";
    script.async = true;
    script.onload = () => {
      setSwiperLoaded(true);
      new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        },
        keyboard: { enabled: true },
        mousewheel: { thresholdDelta: 70 },
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
  
        // ⏳ **Autoplay Configuration**
        autoplay: {
          delay: 3000, // Slide changes every 3 seconds
          disableOnInteraction: false, // Keeps autoplay running after manual interactions
        },
  
        breakpoints: {
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    };
    document.body.appendChild(script);
  }, []);
  

  return (
    <main className="container">
      <div className="content-wrapper">
        {/* Left Side: Text Content */}
        <div className="text-content">
          <span className="location">LAXMI NAGAR, NEW DELHI</span>
          <h1 className="title">Stich & Glow - A Premium Suite</h1>
          <hr className="divider" />
          <p className="description">
            Beauty and mystery are hidden in the beautiful waters that surround the St. Petersburg and Tampa regions.
          </p>
          <a href="#" className="cta-button">CHECK AVAILABILITY</a>
        </div>

        {/* Right Side: Swiper Carousel */}
        <div className="carousel-wrapper">
          <div className="swiper">
            <div className="swiper-wrapper">
              {[
                { title: "Jellyfish", desc: "Jellyfish are marine creatures.", link: "https://en.wikipedia.org/wiki/Jellyfish", img: "https://images.unsplash.com/photo-1628944682084-831f35256163?auto=format&fit=crop&w=687&q=80" },
                { title: "Seahorse", desc: "Experience the magic of a Florida sunset.", link: "https://en.wikipedia.org/wiki/Seahorse", img: "https://images.unsplash.com/photo-1515309025403-4b0184873cef?auto=format&fit=crop&w=735&q=80" },
                { title: "Octopus", desc: "Octopuses inhabit various ocean regions.", link: "https://en.wikipedia.org/wiki/Octopus", img: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=1170&q=80" },
                { title: "Shark", desc: "Sharks are a group of fish with a cartilaginous skeleton.", link: "https://en.wikipedia.org/wiki/Shark", img: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&w=1170&q=80" },
                { title: "Dolphin", desc: "Dolphins are widespread and intelligent marine animals.", link: "https://en.wikipedia.org/wiki/Dolphin", img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=765&q=80" },
              ].map((slide, index) => (
                <div key={index} className="swiper-slide" style={{ backgroundImage: `url(${slide.img})` }}>
                  <div className="slide-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">Explore</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

      {/* Swiper CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

      {/* Background Images */}
      <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg-img top-left" />
      <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg-img bottom-right" />

      {/* Responsive Styles */}
      <style>{`
        /* General Styles */
        .container {
          width: 90%;
          margin: auto;
          min-height: 100vh;
          padding-top: 3rem;
        }
        .content-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        /* Left Side: Text Content */
        .text-content {
          flex: 1;
          max-width: 40%;
          min-width: 300px;
        }
        .location {
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #717171;
        }
        .title {
          text-transform: capitalize;
          font-family: Roboto, sans-serif;
          font-weight: 900;
          font-size: 3rem;
          background: linear-gradient(45deg, #005baa, #000000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .divider {
          background: #005baa;
          height: 4px;
          width: 100px;
          border: none;
          margin: 20px 0;
        }
        .description {
          line-height: 1.6;
        }
        .cta-button {
          display: inline-block;
          text-decoration: none;
          padding: 10px 20px;
          border: 2px solid #c2c2c2;
          border-radius: 20px;
          color: #333;
        }

        /* Right Side: Swiper Carousel */
        .carousel-wrapper {
          flex: 1;
          max-width: 60%;
        }
        .swiper {
          height: 500px;
        }
        .swiper-slide {
          background-size: cover;
          background-position: center;
          color: #fff;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .slide-content h2 {
          margin: 0;
        }
        .slide-content p {
          margin: 5px 0;
        }
        .slide-content a {
          color: #fff;
          text-decoration: underline;
        }

        /* Background Images */
        .bg-img {
          position: fixed;
          opacity: 0.1;
          z-index: -1;
        }
        .top-left {
          top: -4rem;
          left: -12rem;
        }
        .bottom-right {
          bottom: -2rem;
          right: -3rem;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }
          .text-content,
          .carousel-wrapper {
            max-width: 100%;
          }
          .swiper {
            height: 400px;
          }
        }
      `}</style>
    </main>
  );
}
