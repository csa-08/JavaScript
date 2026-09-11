function add7(){
    let number = parseInt(prompt("Digite um número"));
    number += 7;
    document.getElementById("add").innerText = number;
};

function multiply(){
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite outro número"));
    let r = n1*n2;
    document.getElementById("multiply").innerText = r;
};

function captalize(){
    let text = prompt("Digite uma palavra")
        document.getElementById("txt").innerText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

function lastLetter(){
    let texto = prompt("Digite uma palavra ou texto, por favor.");
    ll = texto.charAt(texto.length - 1);
    document.getElementById("ll").innerText = ll;
};  