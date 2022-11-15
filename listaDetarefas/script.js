const botao = document.querySelector('.botaoMais');
const inpuut = document.getElementById('input');  




botao.addEventListener("click", add1);

// Nova Tarefa. ----------------

function add1() {
    var input = document.getElementById('input').value;  
    try {
        add2(input);
    } catch(e) {
        alert(e);
        return
    };   
};

function add2(a) {
    if (a === '') {
        throw new Error("erro");
    } else {
        //adicionando o titulo
        let div = document.createElement('div');
        div.classList.add("tarefa");
        let titulo = document.createElement('h3');
        titulo.classList.add("titulo");
        titulo.textContent = a;
        div.appendChild(titulo);


        // adicionando botões
        for(let nu = 1; nu <= 3; nu++) {
            let botao = document.createElement("button");
            let imagem = document.createElement("img");
            botao.classList.add('botao');
            if (nu === 1) {
                botao.classList.add('verificado');   
            } else if (nu === 2) {
                botao.classList.add('editado');
            } else {
                botao.classList.add('excluir');
            }

            let ImgSrc = add3(nu);
            imagem.src = ImgSrc;
            botao.appendChild(imagem);
            div.appendChild(botao);                        
        }; 
        document.getElementById("tarefas").appendChild(div);
        document.getElementById('input').value = '';
    };
};

function add3(n) {
    if (n === 1) {
        return 'img/verificacao.png';        
    } else if (n === 2) {
        return 'img/lapis.png';
    } else {
        return 'img/x.png';
    }
}

// fim da nova tarefa. -----------------

document.addEventListener("click", function(e) {
    let botaoclicado = e.target; // elemento que foi clicado
    let Pai = botaoclicado.closest("div"); //seleciona a div mais proxima
    
    if (botaoclicado.classList.contains("excluir")) {
       Pai.remove();
    } else if (botaoclicado.classList.contains("verificado")) {
        Pai.classList.toggle("completo");
    } else if (botaoclicado.classList.contains("editado")) {
        editar(Pai);
    } 
})

function editar(a) {  
    let elementos;
    elementos = a.children;
    let tituloConteudo = elementos[0].textContent;
    
    function esconde() {
        let BotV = elementos[1];
        let BotX = elementos[3];
        if (BotV.classList.contains("invisivel") || BotX.classList.contains("invisivel")) {
            BotV.classList.remove("invisivel");
            BotX.classList.remove("invisivel");
        } else {
            BotV.classList.add("invisivel");
            BotX.classList.add("invisivel");
        }
    };

    //remove o titulo e adiciona um input no lugar
    if (elementos[0].classList.contains("titulo")) {
        let inp = document.createElement("input");
        inp.classList.add('opa');
        inp.value = tituloConteudo;
        a.removeChild(elementos[0]);
        a.insertBefore(inp, elementos[0]);

        esconde();        
    } else {
        let titulo = document.createElement("h3");
        titulo.classList.add("titulo");
        let inputDoTitnov = document.querySelector(".opa").value;
        titulo.textContent = inputDoTitnov;
        a.removeChild(elementos[0]);
        a.insertBefore(titulo, elementos[0]);

        esconde();       
    };
   

   // let tituloeditado = document.getElementById("input-edicao");
   // tituloeditado.value = titulo.textContent;   
}






