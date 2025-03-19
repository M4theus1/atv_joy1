// Método simples para adicionar o título
document.body.innerHTML = '<h1 id="titulo">Loja de Produtos</h1>';

// Método complexo para criar o elemento do produto
const produto = document.createElement('div');
produto.innerHTML = `
    <h2>Nome do Produto: Smartphone XYZ</h2>
    <p>Descrição: Um smartphone avançado com câmera de alta resolução e grande capacidade de armazenamento.</p>
    <p>Preço: R$ 1.500,00</p>
    <img src="https://via.placeholder.com/150" alt="Smartphone XYZ">
`;

// Adicionando o produto ao body
document.body.appendChild(produto);