// export default function ServicesPage() {
//     const services = [
//       {
//         title: "Custom Stitching",
//         image: "https://images.unsplash.com/photo-1622335932792-b40e3ed14481?auto=format&fit=crop&w=800&q=80",
//       },
//       {
//         title: "Readymade Dresses",
//         image: "https://images.unsplash.com/photo-1593032457869-9b91dcf5c61a?auto=format&fit=crop&w=800&q=80",
//       },
//       {
//         title: "Bridal Wear",
//         image: "https://images.unsplash.com/photo-1601979031925-c10c56275b3b?auto=format&fit=crop&w=800&q=80",
//       },
//       {
//         title: "Alteration Services",
//         image: "https://images.unsplash.com/photo-1588147751682-9190559a259d?auto=format&fit=crop&w=800&q=80",
//       },
//     ];
  
//     return (
//       <section className="services-section">
//         <div className="container">
//           <h2 className="section-title">Our Signature Services</h2>
//           <div className="cards-grid">
//             {services.map((service, index) => (
//               <div className="service-card" key={index}>
//                 <img src={service.image} alt={service.title} />
//                 <h3>{service.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
  
//         <style jsx>{`
//           .services-section {
//             background: #fff9f4;
//             padding: 4rem 1.5rem;
//             text-align: center;
//           }
  
//           .container {
//             max-width: 1200px;
//             margin: 0 auto;
//           }
  
//           .section-title {
//             font-size: 2.5rem;
//             color: #8b5a2b;
//             margin-bottom: 2rem;
//           }
  
//           .cards-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 2rem;
//           }
  
//           .service-card {
//             background-color: #ffffff;
//             border-radius: 1rem;
//             overflow: hidden;
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }
  
//           .service-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
//           }
  
//           .service-card img {
//             width: 100%;
//             height: 220px;
//             object-fit: cover;
//           }
  
//           .service-card h3 {
//             font-size: 1.2rem;
//             font-weight: 600;
//             color: #5a524b;
//             padding: 1rem;
//           }
  
//           @media (min-width: 1024px) {
//             .service-card h3 {
//               font-size: 1.4rem;
//             }
//           }
//         `}</style>
//       </section>
//     );
//   }
  




export default function ServicesPage() {
    const services = [
      {
        title: "Custom Stitching",
        image: "https://images.unsplash.com/photo-1622335932792-b40e3ed14481?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Readymade Dresses",
        image: "https://images.unsplash.com/photo-1593032457869-9b91dcf5c61a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Bridal Wear",
        image: "https://images.unsplash.com/photo-1601979031925-c10c56275b3b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Alteration Services",
        image: "https://images.unsplash.com/photo-1588147751682-9190559a259d?auto=format&fit=crop&w=800&q=80",
      },
    ];
  
    return (
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Signature Services</h2>
          <div className="cards-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
  
        <style jsx>{`
          .services-section {
            background: #fff9f4;
            padding: 3rem 1rem;
            text-align: center;
          }
  
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
  
          .section-title {
            font-size: 2rem;
            color: #8b5a2b;
            margin-bottom: 1.5rem;
          }
  
          .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
          }
  
          .service-card {
            background-color: #ffffff;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
  
          .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          }
  
          .service-card img {
            width: 100%;
            height: 140px;
            object-fit: cover;
          }
  
          .service-card h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #5a524b;
            padding: 0.8rem;
          }
  
          @media (min-width: 768px) {
            .services-section {
              padding: 4rem 2rem;
            }
  
            .section-title {
              font-size: 2.5rem;
            }
  
            .service-card img {
              height: 220px;
            }
  
            .service-card h3 {
              font-size: 1.25rem;
              padding: 1rem;
            }
          }
        `}</style>
      </section>
    );
  }
  