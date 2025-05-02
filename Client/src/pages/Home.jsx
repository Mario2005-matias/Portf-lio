import Aside from "../components/Aside";
import { FaHtml5 } from "react-icons/fa";

export default function Home() {
  const oqueFaco = [
    {
      id: 1,
      icon: <FaHtml5 />,
      titulo: "Desenvolvimento Front-end",
      descricao:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque vel quae quibusdam aut culpa magni dolor minima placeat rerum accusamus voluptatem voluptatibus incidunt reprehenderit eius, nisi impedit recusandae tempora veritatis?",
    },
    {
      id: 1,
      icon: <FaHtml5 />,
      titulo: "Desenvolvimento Backend",
      descricao:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque vel quae quibusdam aut culpa magni dolor minima placeat rerum accusamus voluptatem voluptatibus incidunt reprehenderit eius, nisi impedit recusandae tempora veritatis?",
    },
  ];

  return (
    <div className="">
      <Aside />

      <div>
        <div>
          <h1>Sobre mim</h1>
          <p>
            Sou Mário Matias Viqueia, Desenvolvedor Web Full-Stack com paixão
            por criar soluções digitais modernas, responsivas e eficientes.
            Tenho experiência em desenvolvimentos de websites e aplicações web,
            focando sempre na performance, usabilidade e melhor experiência do
            usuário. Busco constantemente aprimorar minhas habilidades técnicas
            e criativas, entregano projectos de alta qualidade que atendem às
            necessidades dos clientes e do mercado.
          </p>
        </div>
        <div>
          <h2>O que faço?</h2>
          <div>
            {oqueFaco.map((item) => (
              <div>
                <div>
                  <div>{item.icon}</div>
                  <p>{item.titulo}</p>
                </div>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
