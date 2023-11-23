function suma(n1, n2){
    return n1+n2;
}

function calculate(n1, n2, callback){
    return callback(n1, n2);
}

console.log(calculate(2, 2, suma))

setTimeout(function(){
    console.log("Hello JS")
}, 2000)

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 5000, 'Oscar');