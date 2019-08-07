var min_num = 9999999999999999999999999999999999999
var max_num = 0
var soma = 0

 
 
for (i=0; i<5; i ++){
var num= prompt("Insira um número",0)
num = parseInt(num)

    if (num > 1000 || num < 0){
      alert("Número inválido descartado")
    }
    else{
    soma = soma + num

    if(num < min_num){
      min_num = num
  
    }
    if(num> max_num){
      max_num = num
    }
  }
}
console.log("O menor número é:", min_num)
console.log("O maior número é:", max_num)
console.log("A soma é:", soma)
