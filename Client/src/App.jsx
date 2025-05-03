import Mario from "./assets/image//2023_03_19_17_24_IMG_0298.jpg"
import Citacao from "./components/Citacao";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div className="relative w-full  flex flex-col  justify-center items-center bg-green-500 cursor-default">
      <Header/>
      
      <div className="flex flex-row">
        <div className="fixed top-0 left-0 z-10 w-[50%] h-screen max-lg:hidden bg-red-500">
          <img src={Mario} alt="mário matias viqueia" className="" />
        </div>
        <div className="absolute right-0 w-[50%] h-screen overflow-ellipsis max-lg:w-screen">
          <Main/>
          <Sobre/>
          <Citacao/>
          <Portfolio/>
          <Contacto/>
        </div>
      </div>
    </div>
  );
}

export default App;
