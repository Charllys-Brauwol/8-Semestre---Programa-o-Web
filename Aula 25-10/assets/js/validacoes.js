function validarCadastro(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let estadoSelecionado = selecionarEstado();
    
    if(nome == ""){
        document.getElementById('erro').innerHTML = "<strong>Ops! Informe seu nome.</strong>";
        document.getElementById('erro').removeAttribute('hidden');
        document.getElementById('nome').focus();
    }else if(email == ""){
        document.getElementById('erro').innerHTML = "<strong>Ops! Informe seu email.</strong>";
        document.getElementById('erro').removeAttribute('hidden');
        document.getElementById('email').focus();
    }else if(senha == ""){
        document.getElementById('erro').innerHTML = "<strong>Ops! Informe sua senha.</strong>";
        document.getElementById('erro').removeAttribute('hidden');
        document.getElementById('senha').focus();
    }else if(estadoSelecionado == true){
        document.getElementById('erro').innerHTML = "PODE ENVIAR...";
        document.getElementById('form-cadastro').removeAttribute('onsubmit');
    }
}

function selecionarEstado(){
    let estado = document.getElementById('estado').value;
    if(estado != ""){
        document.getElementById('cidade').removeAttribute('disabled');
        return true;
    }else{
        document.getElementById('erro').innerHTML = "<strong>Ops! Selecione o estado!</strong>";
        document.getElementById('erro').removeAttribute('hidden');
        document.getElementById('cidade').setAttribute('disabled', true);
        return false;
    }
}