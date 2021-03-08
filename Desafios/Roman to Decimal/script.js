valorConvertido = document.querySelector("#decimal");

let P1 = "(I{4}|X{4}|C{4}|M{4})"
let P2 = "((I{2}X)|(I(L|C|D|M)))"
let P3 = "((X{2}(L|C))|(X(D|M)))"
let P4 = "C{2}(D|M)"
let P5 = "V(X|L|C|D|M|V)"
let P6 = "L(C|D|M|L)"
let P7 = "D(M|D)"
let P8 = "I[^I]+I"
let P9 = "(C[^C]+CC|C[^C]+C[^C]+C)"
let P10 = "V[^V]+V"
let P11 = "L[^L]+L"
let P12 = "D[^D]+D"
let P13 = "M[^M]+M"
let P14 = "(X[^X]+XX|X[^X]+X[^X]+X)"
let P15 = "IX[XVC]"
let P16 = "VIX"

let full_P = `(${P1}|${P2}|${P3}|${P4}|${P5}|${P6}|${P7}|${P8}|${P9}|${P10}|${P11}|${P12}|${P13}|${P14}|${P15}|${P16})`;
let pattern = new RegExp(full_P, "i");

let resultado;
function converter(event){
	event.preventDefault();
	let algarismo = document.querySelector("#romano").value.toUpperCase();
	if(pattern.test(algarismo)){
		alert("Algarismo inválido");
	}else{
		resultado = calcularDecimal(algarismo);
		valorConvertido.innerHTML = resultado;
	}
}

function calcularDecimal(algarismo){
	let tamanhoAlgarismo = algarismo.length - 1;
	let i;
	let valorAnterior = 0;
	let soma = 0
	for(i = tamanhoAlgarismo; i>=0; i--){
		valorAtual = valorAlgarismo(algarismo[i]);
		if(valorAtual >= valorAnterior){
			soma += valorAtual;
		}else{
			soma -= valorAtual;
		}
		valorAnterior = valorAtual;
	}
	return soma;	
}



function valorAlgarismo(letra){
	if(letra == 'I'){
		return 1;
	}
	else if(letra == 'V'){
		return 5;
	}
	else if(letra == 'X'){
		return 10;
	}
	else if(letra == 'L'){
		return 50;
	}
	else if(letra == 'C'){
		return 100;
	}
	else if(letra == 'D'){
		return 500;
	}
	else if(letra == 'M'){
		return 1000;
	}
}