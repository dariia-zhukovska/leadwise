"use client";

import Image from "next/image";

const slides = Array.from(
  { length: 17 },
  (_, index) => `/assets/images/presentation/slide-${index + 1}.jpg`,
);

export default function PresentationPage() {
  return (
    <div
      className="presentation-page"
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide}
          style={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            width={1600}
            height={900}
            priority={index === 0}
            style={{
              width: "90%",
              maxWidth: "1600px",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
