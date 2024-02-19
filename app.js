// Função para verificar o campo de texto
function verificarCampoTexto(text, mensagemVazia, mensagemLetrasMaiusculas) {
    if (!text.trim()) {
        labelText = mensagemVazia;
        exibirMensagemErro(labelText);
        return false;
    }

    // Verificar se há letras maiúsculas no texto
    if (/[A-Z]/.test(text)) {
        labelText = mensagemLetrasMaiusculas;
        exibirMensagemErro(labelText);
        return false;
    }

    return true;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(labelText) {
    var labelElement = document.getElementById("label");
    labelElement.style.color = "red";
    labelElement.innerText = labelText;
    setTimeout(function() {
        labelElement.innerText = "Digite novamente";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);
}

// Função para criptografar o texto
function criptografarOuDescriptografar(text, criptoMap) {
    let newText = text;
    for (const [key, value] of Object.entries(criptoMap)) {
        newText = newText.replace(new RegExp(key, 'g'), value);
    }
    return newText;
}

// Função para lidar com a criptografia
function criptografar() {
    let text = document.getElementById("texto").value;

    if (!verificarCampoTexto(text, "Digite uma mensagem para criptografar", "Apenas letras MINUSCULAS")) {
        return;
    }

    const criptoMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    text = criptografarOuDescriptografar(text, criptoMap);
    document.getElementById("texto-final").innerText = text;

    labelText = "Texto criptografado";
    exibirMensagemSucesso(labelText);
    buttonAction("botaoCriptografar");
}

// Função para lidar com a descriptografia
function descriptografar() {
    let text = document.getElementById("texto").value;

    if (!verificarCampoTexto(text, "Digite uma mensagem para descriptografar", "Apenas letras MINUSCULAS")) {
        return;
    }

    const criptoMap = {
        'ufat': 'u',
        'ober': 'o',
        'ai': 'a',
        'imes': 'i',
        'enter': 'e'
    };

    text = criptografarOuDescriptografar(text, criptoMap);
    document.getElementById("texto-final").innerText = text;

    labelText = "Texto descriptografado";
    exibirMensagemSucesso(labelText);
    buttonAction("botaoDescriptografar");
}

// Função para copiar texto para a área de transferência
function copiarTexto() {
    const textAfterElement = document.getElementById("texto-final");
    const text = textAfterElement.innerText;
    navigator.clipboard.writeText(text);
    buttonAction("copiarTexto");
}

// Função para ação de botão (desabilitar temporariamente e exibir mensagem de sucesso)
function buttonAction(id) {
    const button = document.getElementById(id);
    const originalColor = button.style.backgroundColor;
    const orignalText = button.innerHTML;
    button.disabled = true;

    button.innerHTML = "OK !";
    setTimeout(() => {
        button.innerHTML = orignalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 1000);
}

// Função para exibir mensagem de sucesso
function exibirMensagemSucesso(labelText) {
    var labelElement = document.getElementById("label");
    labelElement.style.color = "green";
    labelElement.innerText = labelText;
    setTimeout(function() {
        labelElement.innerText = "Mensagem criptografada";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);
}
