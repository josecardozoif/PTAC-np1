'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

export default async function Login(){

const handlerAlter = async (e) => {
    e.preventDefault();
      toast.success("Alteração efetuada com sucesso!");
}


return (
    <div>
    <Suspense fallback={<p>Carregando...</p>}>
      <h1>Altere seus dados</h1>
      <form onSubmit={handlerAlter}>
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
        <button>Alterar</button>
      </form>
      <ToastContainer/>
    </Suspense>
    </div>
)
}