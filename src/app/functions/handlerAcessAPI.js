'use server'

const crias = [{
    name:"Vito",
    email:"vito@gmail.com",
    password:"123",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},
{
    name:"Caio",
    email:"caio@gmail.com",
    password:"321",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},
{
    name:"Marça",
    email:"marcelino@gmail.com",
    password:"456",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}]

const getUserAuthenticated = (user) => {
//mostra um usuário (cria)
//verificação com dados escrito com os dados no "database"
//fazer um map comparando, já tenho o if else mas falta o map.
    crias.map((cria) => { //mapea o array, acessa individualmente os crias
    if(user.email == cria.email && user.password == cria.password){//se batem
        console.log(cria)
        return cria
    }
    })
}


const getUsers = () =>{
//mostra todos os usuários (crias)
}

export { getUsers, getUserAuthenticated };