// Altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerText="Ao clicar,eu mudei!!";
}

// Adiciona um novo parágrafo ao final do corpo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois que você clicou,eu apareci🙂!!";
    document.body.appendChild(novoParagrafo);
}

// Remova o último parágrafo, se houver mais de um
function removerParagrafo() {
    const paragrafos = document.querySelectorAll("p");
    if (paragrafos.length > 1) {
    paragrafos[paragrafos.length = 1].remove();
    } else {
        alert ("Não há mais paragrafos para remover😥!!");
    }
}

// Muda a cor de fundo da páginas para uma cor aleatória
function mudarCorFundo() {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Corrigido a sintaxe e uso da variável 
    document.body.style.backgroundColor = corAleatoria; 
}
// Muda a cor do texto do parágrafo inicial para uma cor aleatória 
function mudarCorTexto() { 
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC133"]; // Corrigido o erro de sintaxe 
    document.getElementById("text").style.color = cores[Math.floor(Math.random() * cores.length)]; // Corrigido 'length' e 'getElementById' 
    }