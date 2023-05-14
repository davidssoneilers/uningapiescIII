const botaoAlterarTema = document.getElementById("botao-alterar-tema");//const variavel não muda, coletar info do id


const body= document.querySelector("body"); //Coletar informação da tag
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao"); 
botaoAlterarTema.addEventListener("click",() =>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    

if(modoEscuroAtivo){
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");
}
     else {
     imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");
     }   
});