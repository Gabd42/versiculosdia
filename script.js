// script.js
const versiculos = [
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",
    "O Senhor é o meu pastor; nada me faltará. (Salmo 23:1)",
    "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim. (João 14:6)",
    "Posso todas as coisas naquele que me fortalece. (Filipenses 4:13)",
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "O Senhor é bom para todos, e as suas misericórdias estão sobre todas as suas obras. (Salmo 145:9)"
];

let indiceAtual = 0;  // Variável para controlar qual versículo será exibido

function mostrarVersiculo() {
    // Exibe o versículo atual
    document.getElementById("versiculo").innerText = versiculos[indiceAtual];

    // Atualiza o índice para o próximo versículo
    indiceAtual = (indiceAtual + 1) % versiculos.length;  // Volta ao primeiro versículo quando chegar ao final
}
