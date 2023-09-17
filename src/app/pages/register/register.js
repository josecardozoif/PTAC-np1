'use client'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handlerAcessUser from "./functions/handlerAcess";
import { Suspense } from "react";

export default async function Register(){
const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
});

const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Esse usuário já existe!");
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Esse usuário já existe!");
      refresh();
    }
  }

return (
    <div>
    <Suspense fallback={<p>Carregando...</p>}>
      <h1>Cadastre-se</h1>
      <form onSubmit={handlerRegister}>
        <input
          placeholder='Nome'
          type="text"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </Suspense>
    </div>
)
}