import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const crias = getUsers()//ifood chegou 

    return (
        <div>
            <h1>Dashboard</h1>
            {crias.map((cria) => <p>{cria.name}</p>)}
        </div>
    );
};