


// import { useEffect, useState } from "react";

// export default function Loader() {
//   const [progress, setProgress] = useState(0);
//   const [done, setDone] = useState(false);
//   const [showWelcome, setShowWelcome] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setShowWelcome(true);

//           // Delay before fading out
//           setTimeout(() => {
//             setDone(true);
//           }, 8000); // Welcome screen duration

//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20); // Slower loading speed
//   }, []);

//   if (done) return null;

//   return (
//     <div className={`loader-overlay ${showWelcome ? "fade-out" : ""}`}>
//       <div className="loader-content">
//         <img src="/next.svg" alt="Stich & Glow Logo" className="logo" />
//         {!showWelcome ? (
//           <p className="percentage">{progress}%</p>
//         ) : (
//           <p className="welcome-message"></p>
//         )}
//       </div>

//       <style jsx>{`
//         .loader-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           height: 100vh;
//           width: 100vw;
//           background: linear-gradient(135deg, #fff0e6, #fbeee6);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//           opacity: 1;
//           transition: opacity 1.5s ease;
//         }

//         .fade-out {
//           opacity: 0;
//           pointer-events: none;
//         }

//         .loader-content {
//           text-align: center;
//           animation: fadeIn 1s ease forwards;
//         }

//         .logo {
//           width: 120px;
//           height: auto;
//           margin-bottom: 1.5rem;
//         }

//         .percentage {
//           font-size: 1.4rem;
//           color: #8b5a2b;
//           font-weight: 600;
//         }

//         .welcome-message {
//           font-size: 1.5rem;
//           color: #5a3e26;
//           font-weight: 600;
//           animation: fadeIn 1s ease forwards;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media (min-width: 768px) {
//           .logo {
//             width: 160px;
//           }

//           .percentage,
//           .welcome-message {
//             font-size: 2rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }




import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowWelcome(true);

          setTimeout(() => {
            setDone(true);
          }, 2000); // Show welcome for 2s
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Controls speed
  }, []);

  if (done) return null;

  return (
    <div className={`loader-overlay ${showWelcome ? "fade-out" : ""}`}>
      <div className="loader-content">
        <img src="/logo.png" alt="Stich & Glow Logo" className="logo" />
        {!showWelcome ? (
          <>
            <p className="loading-text">Loading...</p>
            <p className="percentage">{progress}%</p>
          </>
        ) : (
          <p className="welcome-message">Welcome to Stich & Glow ✨</p>
        )}
      </div>

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 1.6s ease;
        }

        .fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .loader-content {
          text-align: center;
          animation: fadeIn 1.2s ease forwards;
        }

        .logo {
          width: 120px;
          height: auto;
          margin-bottom: 1rem;
          animation: pulse 2s ease-in-out infinite;
        }

        .loading-text {
          font-size: 1.2rem;
          color: #8b5a2b;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          animation: fadeInUp 1.2s ease forwards;
        }

        .percentage {
          font-size: 1.4rem;
          color: #5a3e26;
          font-weight: 600;
          animation: fadeInUp 1.2s ease forwards;
        }

        .welcome-message {
          font-size: 1.6rem;
          font-weight: 600;
          color: #4c392c;
          animation: fadeInUp 1.2s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.95; }
        }

        @media (min-width: 768px) {
          .logo {
            width: 150px;
          }

          .loading-text, .percentage {
            font-size: 1.5rem;
          }

          .welcome-message {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
