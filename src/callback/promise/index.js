//Estructura General de la promesa
const promise = new Promise(function(resolve, reject){
    resolve('Promise works')
})

const cows = 15

const countCows = new Promise(function(resolve,reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on farm`)
    }else{
        reject('We dont have cows')
    }
})

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log('Finally'))