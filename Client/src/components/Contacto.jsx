import { FaArrowRight } from "react-icons/fa"

export default function Contacto () {

    return (
        <div className="sticky top-0 w-full h-screen justify-center flex flex-col  p-10  max-sm:p-10">
            <h2 className="text-3xl font-semibold">Contacto</h2>
            <h3 className="text-blue-600 font-medium ">Vamos começar algo?</h3>
            <form action="" className=" flex flex-col gap-4 mt-10">
                <p>Deixa Uma Mensagem</p>
                <input type="text" placeholder="Nome Completo" className="border rounded-md py-2 px-4 outline-blue-600" />
                <input type="text" placeholder="E-mail"  className="border rounded-md py-2 px-4 outline-blue-600"/>
                <textarea name="" id="" placeholder="Escrever comentário" className="border rounded-md py-2 px-4 outline-blue-600"></textarea>
                <div className="flex flex-row items-center text-white bg-blue-600 w-44 px-2 py-2 gap-2 rounded-md">
                    Enviar comentário
                    <FaArrowRight/>
                </div>
            </form>
        </div>
    )
}