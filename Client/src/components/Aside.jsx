import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

export default function Aside () {

    return (
        <aside>
                <img src="" alt="" />
                <div>
                    <h1>Mário Matias</h1>
                    <h2>Desenvolvedor Web</h2>
                </div>
                <div>
                    <div>
                        <FaFacebook/>
                    </div>
                    <div>
                        <FaLinkedin/>
                    </div>
                    <div>
                        <FaInstagram/>
                    </div>
                    <div>
                        <FaGithub/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>Telefone</p>
                            <p>+244 946513242 / 929671662</p>
                        </div>
                        {/*sombra*/}
                        <div></div>

                        <div>
                            <p>Email</p>
                            <p>mariomatias879@gmail.com</p>
                        </div>
                        {/*sombra*/}
                        <div></div>

                        <div>
                            <p>Localização</p>
                            <p>Luanda; Cacuaco</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <p>Baixar Cv</p>
                </div>
            </aside>
    )
}