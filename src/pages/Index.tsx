import { useState, useRef, useEffect } from "react";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";

const TRACKS = [
  "https://files.catbox.moe/ooba9j.mp3",
  "https://files.catbox.moe/hjr3fx.mp3",
  "https://files.catbox.moe/5hv5nq.mp3",
  "https://files.catbox.moe/du33sy.mp3",
  "https://files.catbox.moe/znokdm.mp3",
];

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
  }, []);

  const playTrack = (index: number) => {
    if (!audioRef.current) return;
    audioRef.current.src = TRACKS[index];
    audioRef.current.load();
    audioRef.current.play().catch(() => {});
  };

  const stopTrack = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleStartMusic = () => {
    setMusicStarted(true);
    playTrack(0);
  };

  const goToSlide = (next: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlide(next);
      playTrack(next);
      setTransitioning(false);
    }, 400);
  };

  const goNext = (stopCurrent = false) => {
    if (stopCurrent) stopTrack();
    goToSlide(slide + 1);
  };

  const slides = [
    <Slide1 key="s1" musicStarted={musicStarted} onStartMusic={handleStartMusic} onNext={() => goToSlide(1)} />,
    <Slide2 key="s2" onNext={() => goNext(true)} />,
    <Slide3 key="s3" onNext={() => goNext(true)} />,
    <Slide4 key="s4" onNext={() => goNext(true)} />,
    <Slide5 key="s5" />,
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background: "linear-gradient(135deg, #FF006E09, #1DB95409, #8B5CF609)",
          animation: "glitch-bg 5s infinite",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "translateY(24px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {slides[slide]}
      </div>
    </div>
  );
}
