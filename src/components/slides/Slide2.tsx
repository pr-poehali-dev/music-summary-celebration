import { useEffect, useState } from "react";

interface Props {
  onNext: () => void;
}

export default function Slide2({ onNext }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0f0a1a 50%, #0a0a0f 100%)" }}
    >
      {/* BG glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 350,
          height: 350,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          animation: "float-circle 7s ease-in-out infinite",
        }}
      />

      {/* Track label */}
      <div
        className="pt-12 text-center"
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
          }}
        >
          трек, который хочет включиться
        </div>
      </div>

      {/* Vinyl disc */}
      <div
        className="flex flex-col items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        <div
          className="vinyl"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, #2a2a2a 0%, #1a1a1a 30%, #111 50%, #1a1a1a 70%, #222 100%)",
            boxShadow: "0 0 0 3px #333, 0 0 0 6px #1a1a1a, 0 0 40px rgba(139,92,246,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Vinyl grooves */}
          {[60, 80, 100, 120, 140, 160].map((d) => (
            <div
              key={d}
              style={{
                position: "absolute",
                width: d,
                height: d,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            />
          ))}
          {/* Center hole */}
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#8B5CF6",
              boxShadow: "0 0 10px rgba(139,92,246,0.6)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Music bars */}
        <div className="flex gap-1 items-end mt-6" style={{ height: 32 }}>
          {[0.6, 1, 0.7, 0.9, 0.5, 0.8, 0.6, 1, 0.7, 0.85].map((h, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: `${h * 100}%`,
                background: "#8B5CF6",
                borderRadius: 2,
                animation: `float-circle ${0.4 + i * 0.1}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div
        className="px-8 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
        }}
      >
        <p
          style={{
            fontFamily: "Caveat, cursive",
            fontSize: "clamp(1.1rem, 4.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
          }}
        >
          Ты самый светлый человек. Однажды мы встретились и начали покорять этот мир. Ты супер сильная, и я хочу,
          чтобы мы дальше разбивали шаблоны и дарили друг другу новые воспоминания.
        </p>
      </div>

      {/* Button */}
      <div
        className="pb-14"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.6s",
        }}
      >
        <button
          onClick={onNext}
          style={{
            background: "#8B5CF6",
            color: "#fff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "50px",
            padding: "13px 36px",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 0 20px rgba(139,92,246,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Далее →
        </button>
      </div>
    </div>
  );
}
