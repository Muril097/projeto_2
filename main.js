const form = document.getElementById("form");
const lista_nomes = [];
const lista_telefones = [];
let linhas = "";
function atualizar_tabela(){
    const corpo_tabela = document.querySelector("tbody");
    corpo_tabela.innerHTML = linhas;
}
form.addEventListener("submit", function(event){
    event.preventDefault();
    adiciona_linha()
    atualizar_tabela()
    mensagem();
});
function adiciona_linha(){
    const input_nome = document.getElementById("nome");
    const input_telefone = document.getElementById("numb");
    if (lista_telefones.includes(input_telefone.value)) {
        mensagem_alerta_html = mensagem_alerta;
    } else {
        lista_nomes.push(input_nome.value);
        lista_telefones.push(input_telefone.value);
        let linha = "<tr>";
        linha += `<td> ${input_nome.value}</td>`;
        linha += `<td> ${input_telefone.value}</td>`;
        linha += "</tr>";
        linhas += linha;
    }
    input_nome.value = "";
    input_telefone.value = "";
}
