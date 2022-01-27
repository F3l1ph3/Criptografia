///Variaveis globais
let form = document.querySelector(".criptografar");
let textArea = document.querySelector("#mensagem-criptografada");
let btoCriptografar = document.querySelector("#botao-criptografar");
let btoDesciptografar = document.querySelector("#botao-descriptografar");
let btoCopiar = document.querySelector("#botao-copiar");

//bto criptografar
btoCriptografar.addEventListener("click", (event) =>{

	event.preventDefault();
	//vetores para armazenar os atrings
	let msg = form.mensagem.value;
	let msgCrypto = [];

	//Percorrendo a string
	for(let c = 0; c < msg.length; c++){
		//Substituindo as vogais
		if(msg[c] == 'a'){
			msgCrypto.push("ai");
		}else if(msg[c] == 'e'){
			msgCrypto.push("enter");
		}else if(msg[c] == 'i'){
			msgCrypto.push("imes");
		}else if(msg[c] == 'o'){
			msgCrypto.push("ober");
		}else if(msg[c] == 'u'){
			msgCrypto.push("ufat");
		//Mantendo as consoantes
		}else{
			msgCrypto.push(msg[c]);
		}
	}
	//Transformando o array em string e aplicando o conteudo na caixa de texto
	textArea.value = msgCrypto.join("");

});

//bto descriptografar
btoDesciptografar.addEventListener("click", (event) =>{

	event.preventDefault();

    let msgCrypto = form.mensagem.value;
	let msg = [];

	//Percorrendo a string
	for(let c = 0; c < msgCrypto.length; c++){
		//Substituindo as vogais que foram criptografadas e incrementando o indice de acordo
		if(msgCrypto[c] == 'a'&& msgCrypto[c+1] == 'i'){
			msg.push("a");
			c++;
		}else if(msgCrypto[c] == 'e' && msgCrypto[c+1] == 'n' && msgCrypto[c+2] == 't' && msgCrypto[c+3] == 'e' && msgCrypto[c+4] == 'r'){
			msg.push("e");
			c+=4;
		}else if(msgCrypto[c] == 'i' && msgCrypto[c+1] == 'm' && msgCrypto[c+2] == 'e' && msgCrypto[c+3] == 's'){
			msg.push("i");
			c+=3;
		}else if(msgCrypto[c] == 'o' && msgCrypto[c+1] == 'b' && msgCrypto[c+2] == 'e' && msgCrypto[c+3] == 'r'){
			msg.push("o");
			c+=3;
		}else if(msgCrypto[c] == 'u' && msgCrypto[c+1] == 'f' && msgCrypto[c+2] == 'a' && msgCrypto[c+3] == 't'){
			msg.push("u");
			c+=3;
		//Mantendo as consoantes
		}else{
			msg.push(msgCrypto[c]);
		}
	}
	//Transformando o array em string e aplicando o conteudo na caixa de texto
	textArea.value = msg.join("");

});

//bto copiar
btoCopiar.addEventListener("click", (event) =>{

	event.preventDefault();
	//Selecionando a area a ser copiada
    textArea.select();
	//comando 'copiar'
	document.execCommand('copy');
	//desselecionando a area de texto
	window.getSelection().removeAllRanges();
});