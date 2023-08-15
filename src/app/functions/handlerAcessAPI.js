'use server'

const userAuth = [{
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
//mostra um usuário
//fazer um map comparando, já tenho o if else mas falta o map.
        if (user.name == userVer.name && user.email == userVer.email && user.password == user.Verpassword){
            return(userAuth)
        }
        else{
            return("Insira os Dados Corretamente")
        }
    }


const getUsers = () =>{
//mostra todos os usuários
}

export { getUsers, getUserAuthenticated };