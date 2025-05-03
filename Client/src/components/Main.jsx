import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Main() {
  const h2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(h2Ref.current, {
      duration: 2,
      text: "Desenvolvedor Front-End",
      ease: "none",
    })
    .to(h2Ref.current, {
      duration: 1,
      text: "",
      ease: "none",
      delay: 1,
    });

    return () => tl.kill();
  }, []);

  return (
    <main className="sticky top-0 w-full h-screen flex flex-col justify-center p-20 max-sm:p-10 ">
      <h1 className="text-6xl font-bold w-60">Mário Matias</h1>

      {/* h2 com animação infinita */}
      <h2
        ref={h2Ref}
        className="text-blue-600 font-semibold my-2 min-h-[1.5rem]"
      ></h2>

      <p className="text-sm">
        Olá!! Sou programador Front-End vivendo actualmente em Luanda-Cacuaco.
        Minha jornada é marcada por desenvolver soluções eficientes, muito
        performáticas e sempre pensando na experiência do usuário.
      </p>

      <div className="flex flex-row my-4 gap-2">
        <a
          href="#"
          className="flex flex-row items-center justify-center gap-3 border border-gray-300 rounded-full py-2 px-4"
        >
          Contacta-me
          <FaArrowRight className="text-sm" />
        </a>

        <a
          href="#"
          className="flex items-center justify-center text-sm border border-gray-300 rounded-full w-10 h-10"
        >
          <FaArrowDown />
        </a>
      </div>
    </main>
  );
}
