import { useEffect, useState } from "react";

interface Props {
  onNext: () => void;
}

const STATS = [
  {
    label: "Сколько мы дружим",
    value: "779",
    unit: "дней",
    color: "#1DB954",
  },
  {
    label: "Сколько раз ты был(а) на моём дне рождения",
    value: "2",
    unit: "раза",
    color: "#FF006E",
  },
  {
    label: "Как сильно я дорожу тобой",
    value: "∞",
    unit: "",
    sub: "так же, как харизма Хенджина на сцене",
    color: "#FFD700",
  },
];

export default function Slide4({ onNext }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #120a08 50%, #0a0a0a 100%)" }}
    >
      {/* BG glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255,0,110,0.08) 0%, transparent 70%)",
          animation: "float-circle 9s ease-in-out infinite",
        }}
      />

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
            marginBottom: "8px",
          }}
        >
          статистика дружбы
        </div>
        <h2
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(1.8rem, 7vw, 2.6rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          Твои <span style={{ color: "#FF006E" }}>цифры</span>
        </h2>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4 px-8 w-full max-w-sm">
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${s.color}22`,
              borderRadius: 16,
              padding: "16px 20px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: `opacity 0.6s ease ${0.2 + i * 0.15}s, transform 0.6s ease ${0.2 + i * 0.15}s`,
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.45)",
                marginBottom: 6,
                letterSpacing: "0.05em",
              }}
            >
              {s.label}
            </p>
            <div className="flex items-baseline gap-2">
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  fontWeight: 700,
                  color: s.color,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              {s.unit && (
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s.unit}
                </span>
              )}
            </div>
            {s.sub && (
              <p
                style={{
                  fontFamily: "Caveat, cursive",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 4,
                }}
              >
                {s.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA text + button */}
      <div
        className="pb-14 flex flex-col items-center gap-4 px-8 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.7s",
        }}
      >
        <p
          style={{
            fontFamily: "Caveat, cursive",
            fontSize: "clamp(1rem, 4vw, 1.2rem)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.5,
          }}
        >
          И я хочу разделить с тобой свои 30 лет и переход в новое десятилетие
        </p>
        <button
          onClick={onNext}
          style={{
            background: "#FF006E",
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
            boxShadow: "0 0 20px rgba(255,0,110,0.35)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Подробности →
        </button>
      </div>
    </div>
  );
}
