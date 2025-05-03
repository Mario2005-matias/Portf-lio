import { useState, useEffect, useRef } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import Projecto from "../assets/image/Macbook-Air-localhost.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Produtos de exemplo
const produtosIniciais = [
  { id: 1, nome: "Restaurante", categoria: "frontend", image: Projecto },
  { id: 2, nome: "Carrinho de Compra", categoria: "frontend", image: Projecto },
  { id: 3, nome: "Salada", categoria: "frontend", image: Projecto },
  { id: 4, nome: "Refrigerante", categoria: "frontend", image: Projecto },
  { id: 5, nome: "Suco Natural", categoria: "frontend", image: Projecto },
  { id: 6, nome: "Água", categoria: "frontend", image: Projecto },
];

const categorias = ["todos", "frontend", "backend"];

export default function Portfolio() {
  const [produtos] = useState(produtosIniciais);
  const [filtroAtual, setFiltroAtual] = useState("todos");
  const cardRefs = useRef([]);

  const produtosFiltrados =
  filtroAtual === "todos"
    ? produtos
    : produtos.filter((produto) => produto.categoria === filtroAtual);


  // Animações com scroll
  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [produtosFiltrados]); // Reanima se o filtro mudar

 
  return (
    <div className="max-w-4xl mx-auto p-6 max-sm:p-10">
      <h1 className="text-3xl font-bold mb-4" id="portfolio">Portfólio</h1>

      {/* Botões de filtro */}
      <div className="flex gap-4 mb-8">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setFiltroAtual(categoria)}
            className={` ${
              filtroAtual === categoria ? " text-blue-600" : "text-black"
            }`}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de produtos filtrados */}
      <div className="flex flex-row flex-wrap gap-6">
        {produtosFiltrados.map((produto, index) => (
          <div
            key={produto.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white w-72 max-sm:w-full rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <img
              src={produto.image}
              alt={produto.nome}
              className="rounded-tl-lg rounded-tr-lg border-b-2 border-gray-300"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex gap-4 items-center mt-2">
                <span className="flex flex-row items-center justify-center bg-blue-600 text-white text-sm px-2 py-1 gap-2 border rounded-lg hover:bg-blue-700">
                  <FaGithub />
                  Código fonte
                </span>
                <span className="flex flex-row items-center justify-center px-2 py-1 gap-2 border rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <FaEye />
                  Visualizar
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem quando não há produtos */}
      {produtosFiltrados.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Nenhum projecto encontrado nesta categoria.
        </p>
      )}
    </div>
  );
}
