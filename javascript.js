function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

function back() {
    var Resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = Resultado.substring(0, Resultado.length - 1);
}

function calcular() {
    var Resultado = document.getElementById('Resultado').innerHTML;
    if (Resultado) {
        try {
            var resultadoCalculado = new Function('return ' + Resultado)();
            if (isNaN(resultadoCalculado) || !isFinite(resultadoCalculado)) {
                throw new Error('Expressão inválida');
            }
            document.getElementById('Resultado').innerHTML = resultadoCalculado;
        } catch (error) {
            document.getElementById('Resultado').innerHTML = 'Erro';
        }
    } else {
        document.getElementById('Resultado').innerHTML = 'Nada...';
    }
}

document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Escape') {
        clean();
    } else if (key === 'Backspace') {
        back();
    }
});