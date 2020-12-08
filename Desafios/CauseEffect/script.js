const pessoa = {
                nome: "Candido",
                idade: 23,
                altura: 1.73,
                cidade: "Canindé",
                curso: "ADS"
}

function carregado(){
    let div = document.createElement("div");
    div.classList.add("info");

    let p = document.createElement("p");
    p.setAttribute("onclick", "trocar()");
    let ul = document.createElement("ul");
    ul.classList.add("lista");

    let idade = document.createElement("li");
    let altura = document.createElement("li");
    let cidade = document.createElement("li");
    let curso = document.createElement("li");

    p.innerText = pessoa.nome;
    idade.innerText =   pessoa.idade;
    altura.innerText =  pessoa.altura;
    cidade.innerText =  pessoa.cidade;
    curso.innerText = pessoa.curso;

    ul.appendChild(idade);
    ul.appendChild(altura);
    ul.appendChild(cidade);
    ul.appendChild(curso);

    div.appendChild(p);
    div.appendChild(ul);

    document.body.appendChild(div);
}

function trocar(){
    let ul = document.getElementsByClassName("lista");
    ul[0].classList.toggle("desaparece");
}