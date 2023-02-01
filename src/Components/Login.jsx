import React from "react";
import bgImg from "../assets/backImg.jpg";
import { GiWifiRouter } from 'react-icons/gi'

const Login = () => {
  return (
    <div id="background">
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover object-bottom"
          src={bgImg}
          alt="fundo de tela"
        />

        <div className="w-full h-screen absolute top-0 left-0 bg-white/50 p-5 md:flex md:justify-center items-center">
          <div className="text-center rounded-xl w-full md:max-w-[500px] bg-[#E6E7E9] shadow-lg shadow-[#25391a]/50 opacity-80 p-5">
            <div className="flex flex-col items-center">
              <GiWifiRouter  size={60} color='#25391A' />
              <h1 className="text-2xl font-bold text-[#25391A] mt-5">Justiça Federal no Amapá</h1>
              <h2 className="text-xl font-medium text-[#25391A]">Login WI-FI</h2>
            </div>
            <div className="my-5">
              <form>
                <input className="rounded-2xl w-full h-12 p-5 text-xl font-medium text-[#25391a]" placeholder="Digite seu usuário">
                </input>
                <input className="my-5 rounded-2xl w-full h-12 p-5 text-xl font-medium text-[#25391a]" placeholder="Digite sua senha">
                </input>
                <input type="checkbox" name="check" id="check" className="text-xl"/>
                <label htmlFor="check" className="mx-3">Aceito os termos</label>
                <button className="bg-[#25391a] mt-5 p-5 w-full rounded-full text-stone-200 font-semibold">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
