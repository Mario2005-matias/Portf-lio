import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaAddressBook, FaSuitcase, FaPager } from "react-icons/fa"
import Home from "../pages/Home";
import Resumo from "../pages/Resumo";
import Portfolio from "../pages/Portfolio";
import Contacto from "../pages/Contacto";
import { useState } from "react";

export default function NavBar () {
    const escolherSecao = [
        {
            id: 1,
            icon: <FaHome/>,
            linkPagina: "/",
            nome: "Home"
        },
        {
            id: 2,
            icon: <FaPager/>,
            linkPagina: "/resumo",
            nome: "Resumo"
        },
        {
            id: 3,
            icon: <FaSuitcase/>,
            linkPagina: "/portfolio",
            nome: "Portfólio"
        }, 
        {
            id: 4,
            icon: <FaAddressBook/>,
            linkPagina: "/contacto",
            nome: "Contacto"
        },
    ]
    const [botaoAtual, setBotaoAtual] = useState(escolherSecao[0])

    return (
        <BrowserRouter>
        <nav className=" max-w-md">
          {/* <ul className="flex flex-row justify-around items-center p-4 rounded-2xl border border-gray-200 shadow-md" >
            <li className="flex flex-col items-center justify-center bg-gradient-to-r bg-blue-500 p-2 rounded-md">
                <FaHome/>
              <Link to="/">Home</Link>
            </li>
            <li className="flex flex-col items-center justify-center">
                <FaPager/>
              <Link to="/resumo">Resumo</Link>
            </li>
            <li className="flex flex-col items-center justify-center">
                <FaSuitcase/>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="flex flex-col items-center justify-center">
                <FaAddressBook/>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul> */}
          <ul className=" flex flex-row justify-around items-center p-4 rounded-2xl border border-gray-200 shadow-md gap-4">
            {escolherSecao.map((opcao) => (
                <li 
                    key={opcao.id}
                    onClick={() => setBotaoAtual(opcao.id)}
                    className={`px-4 py-2 rounded-md flex flex-col items-center justify-center  text-gray-600 ${
                        botaoAtual === opcao.id
                          ? "bg-blue-600 text-white duration-200"
                          : "bg-white hover:bg-blue-200 duration-300"
                      }`}
                >
                    <div className="text-xl">{opcao.icon}</div>
                    <Link to={opcao.linkPagina} className="font-medium">{opcao.nome}</Link>
                </li>
            ))}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resumo" element={<Resumo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    )
}