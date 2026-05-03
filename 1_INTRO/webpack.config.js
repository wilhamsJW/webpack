const path = require('path');

module.exports = {
    entry: "./src/teste.js", /**Define o ponto de entrada incial que o Webpack comeca a montar o bundle
     O browser nao ve diretamente o entry e sim o arquivo final chamado bundle.js*/

    /**
     * output - define a saida que o Webapck vai gerar os arquivos finais e como vai gerar para que
     * o browser comece a consumir
     * 
     * path: path.resolve(__dirname,... = função do Node.js para gerar um caminho absoluto que o Webpack exige
     * 
     * 'dist' = representa o nome da pasta que foi gerada pelo webpack contendo os arquivos
     * filename = eh o nome que q estamos chamando para gera essa saida
     * ao rodao comando para gerar build que nesse caso eh o npx webpack, ira criar um arquivo dentro do dist chamado 
     * bundle.js e esse arquivo coincide com o ponto de entrada que se encontra em:  entry: "./src/teste.js",
     * se abrirmos a pasta dist e vemos oq ue tem em bundle.js veremos que o mesmo codigo que existe em teste.js
     * só que minificado que representa uma forma do browser ler isso
     * 
     * path.resolve: Função do Node.js usada para gerar um caminho absoluto, necessário para o Webpack saber onde salvar os arquivos.
     * 
     * bundle.js

        Arquivo final gerado pelo Webpack que contém:

        o código do entry
        todas as dependências
        código interno do Webpack

        👉 Esse sim é o arquivo que o browser executa
     * 
     * Obs: O Código só será minificado se adicionar dentro do output mode: 'production'
     * mode: 'development' o código NÃO vem minificado
     */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
}