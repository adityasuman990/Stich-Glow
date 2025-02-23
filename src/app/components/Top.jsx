"use client";

export default function TopBar() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#690B22",
        height: "30px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "scroll 20s linear infinite",
        //   color: "white",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <p
            key={i}
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              marginRight: "20px",
              fontFamily: "'Courier New', Courier, monospace", // Change this
              fontStyle: "italic", // Make it italic
            }}
          >
            {Array(10)
              .fill("Stich and Glow")
              .join("  •  ")}
          </p>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}
