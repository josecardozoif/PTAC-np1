'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

const handlerAlt = async (e) => {
    e.preventDefault();
      toast.success("Cadastro efetuado com sucesso!");
}

return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handlerAlt}>
        <input
          placeholder='Nome'
          type="text"
          required>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          required>
        </input>
        <input
          placeholder='Senha'
          type='password'
          required>
        </input>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
)
}