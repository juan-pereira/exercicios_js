var fatorial = 1
var n = prompt("Insira o valor para N!")
n = parseInt(n)

for(i=n; i>1; i--){
  fatorial = fatorial * i
  console.log(fatorial)
}
