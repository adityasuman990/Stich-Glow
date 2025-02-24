// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         width: "100%",
//         background: "#FFC785",
//         backdropFilter: "blur(10px)",
//         color: "black",
//         textAlign: "center",
//         padding: "30px 10px",
//         fontFamily: "Arial, sans-serif",
//         fontSize: "14px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {/* Top Section */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           flexWrap: "wrap",
//           width: "80%",
//           borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
//           paddingBottom: "20px",
//         }}
//       >
//         {/* Address Section */}
//         <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
//           <h3 style={{ color: "#FFD700" }}>📍 Address</h3>
//           <p>123 Tech Park, Innovation Street</p>
//           <p>Silicon Valley, CA 94016</p>
//           <p>USA</p>
//           <button
//             onClick={() => window.open("https://www.google.com/maps", "_blank")}
//             style={{
//               marginTop: "10px",
//               padding: "8px 15px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               color: "#000",
//               fontWeight: "bold",
//               transition: "0.3s",
//             }}
//             onMouseEnter={(e) => (e.target.style.background = "#FFA500")}
//             onMouseLeave={(e) => (e.target.style.background = "#FFD700")}
//           >
//             📌 Locate on Google Maps
//           </button>
//         </div>

//         {/* Contact Section */}
//         <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
//           <h3 style={{ color: "#FFD700" }}>📞 Contact Us</h3>
//           <p>Phone: +1 234 567 890</p>
//           <p>Email: support@yourcompany.com</p>
//           <p>Working Hours: Mon - Fri, 9 AM - 6 PM</p>
//         </div>

//         {/* Quick Links */}
//         <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
//           <h3 style={{ color: "#FFD700" }}>🔗 Quick Links</h3>
//           <a
//             href="#"
//             style={{
//               display: "block",
//               textDecoration: "none",
//               color: "#fff",
//               transition: "0.3s",
//               padding: "5px 0",
//             }}
//             onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//             onMouseLeave={(e) => (e.target.style.color = "#fff")}
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             style={{
//               display: "block",
//               textDecoration: "none",
//               color: "#fff",
//               transition: "0.3s",
//               padding: "5px 0",
//             }}
//             onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//             onMouseLeave={(e) => (e.target.style.color = "#fff")}
//           >
//             About Us
//           </a>
//           <a
//             href="#"
//             style={{
//               display: "block",
//               textDecoration: "none",
//               color: "#fff",
//               transition: "0.3s",
//               padding: "5px 0",
//             }}
//             onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//             onMouseLeave={(e) => (e.target.style.color = "#fff")}
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             style={{
//               display: "block",
//               textDecoration: "none",
//               color: "#fff",
//               transition: "0.3s",
//               padding: "5px 0",
//             }}
//             onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//             onMouseLeave={(e) => (e.target.style.color = "#fff")}
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>

//       {/* Social Media Section */}
//       <div style={{ marginTop: "20px", fontSize: "20px" }}>
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: "0 15px", color: "#fff", transition: "0.3s" }}
//           onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//           onMouseLeave={(e) => (e.target.style.color = "#fff")}
//         >
//           🌐 Facebook
//         </a>
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: "0 15px", color: "#fff", transition: "0.3s" }}
//           onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//           onMouseLeave={(e) => (e.target.style.color = "#fff")}
//         >
//           🕊️ Twitter
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: "0 15px", color: "#fff", transition: "0.3s" }}
//           onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//           onMouseLeave={(e) => (e.target.style.color = "#fff")}
//         >
//           📷 Instagram
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: "0 15px", color: "#fff", transition: "0.3s" }}
//           onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
//           onMouseLeave={(e) => (e.target.style.color = "#fff")}
//         >
//           💼 LinkedIn
//         </a>
//       </div>

//       {/* Copyright Section */}
//       <div style={{ marginTop: "20px", fontSize: "12px", opacity: "0.8" }}>
//         <span>© 2025 YourCompany. All rights reserved.</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                width: "100%",
                // background: "r",
                backdropFilter: "blur(5px)",
                color: "#000",
                textAlign: "center",
                padding: "30px 10px",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Top Section */}
            {/* <hr /> */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    width: "80%",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                    paddingBottom: "20px",
                }}
            >
                {/* Address Section */}
                <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
                    <h3 style={{ color: "#000" }}>📍 Address</h3>
                    <p>123 Tech Park, Innovation Street</p>
                    <p>Silicon Valley, CA 94016</p>
                    <p>USA</p>
                    <button
                        onClick={() => window.open("https://www.google.com/maps", "_blank")}
                        style={{
                            marginTop: "10px",
                            padding: "8px 15px",
                            background: "#000",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#fff",
                            fontWeight: "bold",
                            transition: "0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.background = "#444")}
                        onMouseLeave={(e) => (e.target.style.background = "#000")}
                    >
                        📌 Locate on Google Maps
                    </button>
                </div>

                {/* Contact Section */}
                <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
                    <h3 style={{ color: "#000" }}>📞 Contact Us</h3>
                    <p>Phone: +1 234 567 890</p>
                    <p>Email: support@yourcompany.com</p>
                    <p>Working Hours: Mon - Fri, 9 AM - 6 PM</p>
                </div>

                {/* Quick Links */}
                <div style={{ flex: "1", minWidth: "250px", textAlign: "left" }}>
                    <h3 style={{ color: "#000" }}>🔗 Quick Links</h3>
                    <a
                        href="#"
                        style={{
                            display: "block",
                            textDecoration: "none",
                            color: "#000",
                            transition: "0.3s",
                            padding: "5px 0",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#444")}
                        onMouseLeave={(e) => (e.target.style.color = "#000")}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        style={{
                            display: "block",
                            textDecoration: "none",
                            color: "#000",
                            transition: "0.3s",
                            padding: "5px 0",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#444")}
                        onMouseLeave={(e) => (e.target.style.color = "#000")}
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        style={{
                            display: "block",
                            textDecoration: "none",
                            color: "#000",
                            transition: "0.3s",
                            padding: "5px 0",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#444")}
                        onMouseLeave={(e) => (e.target.style.color = "#000")}
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        style={{
                            display: "block",
                            textDecoration: "none",
                            color: "#000",
                            transition: "0.3s",
                            padding: "5px 0",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#444")}
                        onMouseLeave={(e) => (e.target.style.color = "#000")}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Social Media Section */}
            <div style={{ marginTop: "20px", fontSize: "20px" }}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px", color: "#000", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#444")}
                    onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                    🌐 Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px", color: "#000", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#444")}
                    onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                    🕊️ Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px", color: "#000", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#444")}
                    onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                    📷 Instagram
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px", color: "#000", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#444")}
                    onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                    💼 LinkedIn
                </a>
            </div>

            {/* Copyright Section */}
            <div style={{ marginTop: "20px", fontSize: "12px", opacity: "0.8" }}>
                <span>© 2025 YourCompany. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
