import { FaRegMoon } from "react-icons/fa"

export default function Header() {

    return (
        <header className=" w-full p-9  flex flex-row items-center justify-center">
            <div className="container flex flex-row items-center justify-between">
                <h2 className="text-xl">Mario <strong>Matias</strong></h2>
                <div className="bg-blue-200 p-2 border rounded-full">
                    <FaRegMoon className="text-xl "/>
                </div>
            </div>
        </header>
    )
}