function fb(){
    let x = document.getElementById('numeros');
    let number= parseInt(prompt("Digite um número"));
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0 && i % 5 == 0){
            x.innerText += `FizzBuzz\n`;
        } else if (i % 3 == 0){
            x.innerText += `Fizz\n`;
        } else if(i % 5 == 0){
            x.innerText += `Buzz\n`;
        } else {x.innerText += `${i}\n`};   
    };
};