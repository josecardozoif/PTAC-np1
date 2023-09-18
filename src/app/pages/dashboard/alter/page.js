'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

const handlerAlt = async (e) => {
    e.preventDefault();
      toast.success("Alteração efetuada com sucesso!");
}
return (
    <div>
      <h1>Altere seus dados</h1>
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
        <button>Alterar</button>
        <ToastContainer/>
      </form>
    </div>
)
}