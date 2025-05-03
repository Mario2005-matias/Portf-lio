export default function Sobre() {
  return (
    <div className="sticky top-0 w-full min-h-screen flex flex-col  p-20 bg-white max-sm:p-10">
      <h2 className="text-3xl font-bold">Sobre mim</h2>
      <h3 className="text-blue-600 font-medium ">Quem sou?</h3>
      <p className="my-6">
        Sou Mário Matias Viqueia, desenvolvedor web com paixão por criar
        soluções digitais modernas, responsivas e eficientes. Tenho experiência
        no desenvolvimento de sites e aplicações web, focando sempre na
        performance, usabilidade e melhor experiência do usuário. Busco
        constantemente aprimorar as minhas habilidades técnicas e criativas,
        entregando projectos de alta qualidade que atendem às necessidades dos
        clientes e do mercado.
      </p>
      <p className="text-blue-600 font-semibold text-sm">
        Contacto:
        <span className="text-gray-600"> (+244) 946 513 232 / 929 671 662</span>
      </p>
      <p className="text-blue-600 font-semibold text-sm">
        Residência: <span className="text-gray-600"> Luanda-Cacuaco</span>
      </p>
      <p className="text-blue-600 font-semibold text-sm">
        E-mail: <span className="text-gray-600"> mariomatias879@gmail.com</span>
      </p>

      <div className="w-full flex flex-col flex-wrap justify-between my-5">
        <div>
            <h2 className=" w-60 text-xl font-semibold mb-2 ">Hards Skills</h2>
            <div className="flex flex-row justify-around  h-auto gap-2 ">
                <div className="gap-2 flex flex-row flex-wrap">
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">HTML5</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">CSS3</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">JavaScript</p>
               
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">React Js</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Tailwindcss</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">PostgreeSQL</p>
               
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Node Js</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Prisma</p>
                    <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Git/Github</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className=" w-60 text-xl font-semibold mb-2">Soft Skills</h2>
            <div className="gap-2 flex flex-row mb-3 flex-wrap">
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Comunicação Eficaz</p>
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Trabalho em Equipa</p>
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Atenção aos Detalhes</p>
            
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Adaptabilidade</p>
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Gestão de Tempo</p>
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Empatia pelo Usuário</p>
                <p className="bg-gray-300 py-1 px-2 rounded-md text-center text-xs font-medium">Proatividade</p>
            </div>
        </div>
      </div>

    </div>
  );
}
