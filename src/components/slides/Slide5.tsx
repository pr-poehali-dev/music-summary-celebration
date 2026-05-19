import { useEffect, useState } from "react";

const SCHEDULE = [
  { time: "17:30 – 18:30", desc: "Сбор, лёгкий перекус, первые тосты" },
  { time: "18:30 – 20:30", desc: "Вкусно кушаем, вкусно пьём и проходим квиз по Иришке" },
  { time: "20:30 – 22:00", desc: "Слушаем музыку, общаемся" },
];

export default function Slide5() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080810 0%, #0a0a14 50%, #080810 100%)" }}
    >
      {/* Stars bg */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "#fff",
            opacity: Math.random() * 0.4 + 0.1,
            animation: `float-circle ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${-Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Top glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)",
          animation: "float-circle 8s ease-in-out infinite",
        }}
      />

      {/* Header */}
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
            color: "rgba(255,215,0,0.6)",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          тематика праздника
        </div>
        <h2
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(2rem, 8vw, 3rem)",
            fontWeight: 700,
            color: "#FFD700",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Eurovision 🌟
        </h2>
      </div>

      {/* Invite details */}
      <div
        className="flex flex-col items-center text-center px-8 gap-5 w-full max-w-sm"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
        }}
      >
        <div
          style={{
            background: "rgba(255,215,0,0.06)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: 20,
            padding: "20px 24px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1.3rem, 6vw, 1.8rem)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            27 июня в 17:30
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
            }}
          >
            Московский проспект 139А
            <br />
            <span style={{ color: "#FFD700" }}>м. Электросила</span>
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>
              (вход с торца здания через железную калитку)
            </span>
          </p>
          <p
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              marginTop: 8,
            }}
          >
            Мой номер знаешь!
          </p>
        </div>

        {/* Schedule */}
        <div className="flex flex-col gap-2 w-full">
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Что тебя ждёт?
          </p>
          {SCHEDULE.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                padding: "8px 12px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.7rem",
                  color: "#FFD700",
                  whiteSpace: "nowrap",
                  paddingTop: 2,
                  minWidth: "88px",
                }}
              >
                {s.time}
              </span>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.4,
                  textAlign: "left",
                }}
              >
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom buttons */}
      <div
        className="pb-10 flex flex-col items-center gap-3"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.7s",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          нажми, чтобы узнать подробности
        </p>
        <a
          href="https://docs.google.com/document/d/19nD4DwoFk2GaUhR5G1j0_YAmeqTiTXoMtmebOjLU_JA/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#FFD700",
            color: "#000",
            fontFamily: "Oswald, sans-serif",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "50px",
            padding: "13px 36px",
            display: "inline-block",
            transition: "all 0.2s",
            boxShadow: "0 0 24px rgba(255,215,0,0.35)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Eurovision →
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1Ku3rdanulnFMoDGRRYnycAnj4sJThtFrm7mCLC-oufE/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            color: "#fff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "50px",
            padding: "11px 30px",
            display: "inline-block",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FFD700";
            e.currentTarget.style.color = "#FFD700";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "#fff";
          }}
        >
          🎁 Wishlist
        </a>
      </div>
    </div>
  );
}
