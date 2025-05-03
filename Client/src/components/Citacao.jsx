

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Citacao() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center p-20 text-white bg-blue-500 max-sm:p-10"
    >
      <p className="font-semibold">
        "Programar não é apenas escrever código; é construir pontes invisíveis entre problemas complexos e soluções elegantes. É a arte de conversar com máquinas para transformar ideias humanas em realidades digitais."
      </p>
      <p className="my-6 text-sm">By Lucas Andrade</p>
    </div>
  );
}
