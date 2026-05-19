import { useEffect, useState } from "react";

interface Props {
  onNext: () => void;
}

interface CircleConfig {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
  dur: string;
  delay: string;
}

const CIRCLES: CircleConfig[] = [
  { size: 280, top: "-60px", left: "-80px", color: "rgba(29,185,84,0.07)", dur: "9s", delay: "0s" },
  { size: 200, top: "20%", right: "-60px", color: "rgba(255,0,110,0.06)", dur: "7s", delay: "-2s" },
  { size: 160, bottom: "15%", left: "10%", color: "rgba(139,92,246,0.07)", dur: "11s", delay: "-4s" },
  { size: 120, bottom: "-40px", right: "20%", color: "rgba(255,215,0,0.05)", dur: "8s", delay: "-1s" },
  { size: 90, top: "40%", left: "30%", color: "rgba(29,185,84,0.05)", dur: "6s", delay: "-3s" },
];

export default function Slide3({ onNext }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050f08 0%, #0a0a0a 100%)" }}
    >
      {/* Floating circles */}
      {CIRCLES.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: c.size,
            height: c.size,
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
            background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
            animation: `float-circle ${c.dur} ease-in-out infinite`,
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Title */}
      <div
        className="pt-12 text-center px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          момент с тобой
        </div>
        <h2
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(2rem, 8vw, 3rem)",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          Наши{" "}
          <span style={{ color: "#1DB954" }}>моменты</span>
        </h2>
      </div>

      {/* Memory cards */}
      <div
        className="flex flex-col gap-4 px-8 w-full max-w-sm"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.3s",
        }}
      >
        {[
          { icon: "✈️", text: "Помнишь, как мы летели в самолёте и ты была самым сильным человечком на планете?" },
          { icon: "🏎️", text: "А как мы обсуждали сериал про Формулу?" },
          { icon: "☕", text: "И каждый наш поход в кафе — спасибо за эти моменты." },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "14px 18px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: `opacity 0.6s ease ${0.3 + i * 0.15}s, transform 0.6s ease ${0.3 + i * 0.15}s`,
            }}
          >
            <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div
        className="pb-14"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.7s",
        }}
      >
        <button
          onClick={onNext}
          style={{
            background: "transparent",
            color: "#1DB954",
            fontFamily: "Oswald, sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            border: "1px solid #1DB954",
            borderRadius: "50px",
            padding: "13px 36px",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 0 15px rgba(29,185,84,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1DB954";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#1DB954";
          }}
        >
          Что там дальше?
        </button>
      </div>
    </div>
  );
}