function inserir(){
    var nome = document.getElementById('nome').value;
    var disciplina = document.getElementById('disciplina').value;
    var nota = document.getElementById('nota').value;
    //var situacao = document.getElementById('situacao').value; 

    if(nome == "" || disciplina == ""){
        alert('Preencha todos os dados!');
    }else{
        var situacaoApro;
        if(nota >= 7){
            situacaoApro = "Aprovado";
        }else{
            situacaoApro = "Reprovado";
        }
        var elemento = document.getElementById('tbl-cadastro');
        var numLinhas = elemento.rows.length;
        var linha = elemento.insertRow(numLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        var celula4 = linha.insertCell(3);
        celula1.innerHTML = nome;
        celula2.innerHTML = disciplina;
        celula3.innerHTML = nota;
        celula4.innerHTML = situacaoApro;
        document.getElementById('nome').value = "";
        document.getElementById('disciplina').value = "";
        document.getElementById('nota').value = "";
    }
}