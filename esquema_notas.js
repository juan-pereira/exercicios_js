var nota = prompt("Insira uma nota", 0)
nota = parseInt(nota)
while(nota<0 || nota >10){
 nota = prompt("Sua nota é inválida, insira novamente")
 nota = parseInt(nota)
}
if(nota>=0 || nota<=10){
 alert("Nota válida, sua nota é: ",nota)
}
