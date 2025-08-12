function gerarTabuada(botao) {
	let num = Number(document.getElementById('numero').value);
	let resultado = document.getElementById('resultado');
	let tabuada = "";
	
	if(isNaN(num)) {
		alert("Digite um número válido!!!");
		return;
	}
	
	for(let i=1; i<=10; i++) {
		tabuada += num + " x " + i + " = " + (num*i) + "<br>"; 
	}
	
	resultado.innerHTML = tabuada;
}