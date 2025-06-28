// // components/GoogleMapSection.jsx
// export default function GoogleMapSection() {
//     return (
//       <section className="map-section">
//         <div className="container">
//           <h2 className="map-heading">Visit Us</h2>
//           <p className="map-description">Find us in the heart of Laxmi Nagar, New Delhi</p>
//           <div className="map-container">
//             <iframe
//               title="Stich & Glow Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.986021208463!2d77.27704741482482!3d28.6020480824276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce377716d6ae3%3A0xb1b9fd8f2b77babb!2sLaxmi%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1657013132540!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0, borderRadius: '12px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
  
//         <style jsx>{`
//           .map-section {
//             padding: 3rem 1rem;
//             background-color: #fefefe;
//             text-align: center;
//           }
  
//           .map-heading {
//             font-size: 2rem;
//             margin-bottom: 0.5rem;
//             color: #8b5a2b;
//           }
  
//           .map-description {
//             font-size: 1rem;
//             color: #5a524b;
//             margin-bottom: 2rem;
//           }
  
//           .map-container {
//             width: 100%;
//             max-width: 1000px;
//             margin: 0 auto;
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//             border-radius: 12px;
//             overflow: hidden;
//           }
//         `}</style>
//       </section>
//     );
//   }
  


export default function GoogleMapSection() {
    return (
      <section className="map-section">
        <div className="container">
          <h2 className="map-heading">📍 Find Us at Stich & Glow</h2>
          <p className="map-description">
            Nestled in the heart of <strong>Laxmi Nagar, New Delhi</strong>, our salon welcomes you with luxury and care.
          </p>
  
          <div className="map-wrapper">
            <iframe
              title="Stich & Glow Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8723951288516!2d77.27768979999999!3d28.633586299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd27299ce02d%3A0x4a938bba2ca54923!2sStitch%20%26%20Glow!5e0!3m2!1sen!2sin!4v1748270897647!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
  
        <style jsx>{`
          .map-section {
            // background: linear-gradient(145deg, #1e1e1e, #2e2a28);
            padding: 4rem 1.5rem;
            color: #f9f5f0;
            text-align: center;
          }
  
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
  
          .map-heading {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #d4af37; /* Gold tone */
          }
  
          .map-description {
            font-size: 1rem;
            color: black;
            margin-bottom: 2rem;
          }
  
          .map-wrapper {
            border: 3px solid #d4af37;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
          }
  
          @media (min-width: 768px) {
            .map-heading {
              font-size: 2.5rem;
            }
  
            .map-description {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </section>
    );
  }
  