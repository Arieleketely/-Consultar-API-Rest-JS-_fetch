
function carregar(){
    const botao=document.getElementById("botao_buscar")
    const input_nome=document.getElementById("input_usuario")
    
    botao.onclick = () => {
    
const usuario=input_nome.value
const minhaReq=new Request(`https://api.github.com/users/${usuario}`)
fetch(minhaReq).then(response=>response.json())
.then(dados=>{
    
    const nome=dados.name
    const cidade=dados.location

 alert("nome é"+" "+nome+" "+ "e a cidade é"+" "+cidade);
})
       
    }
  
}
carregar()



