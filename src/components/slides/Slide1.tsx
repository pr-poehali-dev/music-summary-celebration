import { useEffect, useState } from "react";

interface Props {
  musicStarted: boolean;
  onStartMusic: () => void;
  onNext: () => void;
}

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-06-27T17:30:00");
    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 justify-center mt-4">
      {[
        { val: time.days, label: "дней" },
        { val: time.hours, label: "часов" },
        { val: time.minutes, label: "минут" },
        { val: time.seconds, label: "секунд" },
      ].map(({ val, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="text-2xl font-bold tabular-nums"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#1DB954",
              minWidth: "2.5rem",
              textAlign: "center",
            }}
          >
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Slide1({ musicStarted, onStartMusic, onNext }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d1a0d 50%, #0a0a0a 100%)" }}
    >
      {/* Animated BG circles */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: "-100px",
          left: "-100px",
          background: "radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)",
          animation: "float-circle 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          bottom: "50px",
          right: "-80px",
          background: "radial-gradient(circle, rgba(255,0,110,0.07) 0%, transparent 70%)",
          animation: "float-circle 10s ease-in-out infinite reverse",
          animationDelay: "-3s",
        }}
      />

      {/* TOP: SpotIRA logo */}
      <div
        className="pt-12 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div
          className="glitch-text"
          data-text="spotIRA"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(2.5rem, 10vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#1DB954",
            textTransform: "uppercase",
          }}
        >
          spotIRA
        </div>
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            marginTop: "4px",
          }}
        >
          музыкальные итоги · 2026
        </div>
      </div>

      {/* MIDDLE: Main text */}
      <div className="flex flex-col items-center text-center px-8 gap-6">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(0.7rem, 3vw, 0.9rem)",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            не просто музыкальные итоги
          </p>
          <h1
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1.6rem, 7vw, 2.4rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            а приглашение отметить
            <br />
            <span style={{ color: "#1DB954" }}>мои 30</span>
          </h1>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.55s",
          }}
        >
          <p
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "clamp(1.3rem, 5vw, 1.7rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
            }}
          >
            Привет, Светик — это для тебя ✨
          </p>
        </div>

        {/* Countdown */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            до 27 июня
          </p>
          <Countdown />
        </div>
      </div>

      {/* BOTTOM: Buttons */}
      <div
        className="pb-14 flex flex-col items-center gap-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s",
        }}
      >
        {!musicStarted ? (
          <button
            onClick={onStartMusic}
            className="animate-pulse-green"
            style={{
              background: "#1DB954",
              color: "#000",
              fontFamily: "Oswald, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "50px",
              padding: "14px 40px",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🎵 Нажми сюда
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div
              style={{
                fontFamily: "Caveat, cursive",
                fontSize: "0.95rem",
                color: "#1DB954",
                letterSpacing: "0.05em",
              }}
            >
              музыка играет ♫
            </div>
            <button
              onClick={onNext}
              style={{
                background: "transparent",
                color: "#fff",
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "50px",
                padding: "12px 36px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1DB954";
                e.currentTarget.style.color = "#1DB954";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Смотреть итоги →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
