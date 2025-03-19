// Capturando os elementos
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando texto ao título e ao link
titulo.innerText = "Bem-vindo ao Meu Site";
link.innerText = "Acesse a Proz Educação";

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
`;
