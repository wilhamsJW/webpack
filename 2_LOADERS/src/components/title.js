import './title.css';

class Title { 
    // Define uma classe chamada Title

    create(title) { 
        // Método que recebe o texto do título

        const h1 = document.createElement('h1'); 
        // Cria um elemento <h1> na memória (ainda não está no DOM)

        h1.innerText = title; 
        // Define o texto interno do <h1>

        h1.classList.add('main-title'); 
        // Adiciona a classe CSS "main-title" ao elemento

        document.querySelector('body').appendChild(h1); 
        // Seleciona o <body> e adiciona o <h1> como filho (renderiza na tela)
    }
}

export default Title;