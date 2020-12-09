const pessoas =[ 
                {nome: "Cândido",idade: 23, altura: 1.73, cidade: "Canindé", curso: "ADS"},
                {nome: "Pedro",idade: 17, altura: 1.80, cidade: "Aracaju", curso: "Matemática"},
                {nome: "Maria",idade: 27, altura: 1.63, cidade: "Itabaiana", curso: "Odontologia"},
                {nome: "Joana",idade: 18, altura: 1.70, cidade: "Canindé", curso: "ADS"},
                {nome: "Biruleibe",idade: 21, altura: 1.59, cidade: "Aracaju", curso: "VASP"}
]

function carregado(){
    for(let i = 0; i < pessoas.length; i++ ){
        let div = document.createElement("div");
        div.id = "" + i;
        div.classList.add("info");

        let p = document.createElement("p");
        p.setAttribute("onclick", "trocar(this)");
        let ul = document.createElement("ul");
        ul.classList.add("lista");

        let idade = document.createElement("li");
        let altura = document.createElement("li");
        let cidade = document.createElement("li");
        let curso = document.createElement("li");

        p.innerText = pessoas[i].nome;
        idade.innerText = pessoas[i].idade;
        altura.innerText = pessoas[i].altura;
        cidade.innerText = pessoas[i].cidade;
        curso.innerText = pessoas[i].curso;

        ul.appendChild(idade);
        ul.appendChild(altura);
        ul.appendChild(cidade);
        ul.appendChild(curso);

        div.appendChild(p);
        div.appendChild(ul);

        document.body.appendChild(div);
    }
}

function trocar(p){
    let ul = p.parentElement.children[1];
    ul.classList.toggle("desaparece");
}