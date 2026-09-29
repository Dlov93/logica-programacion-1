const prompt = require("prompt-sync")();

let n= prompt("¿dame 3 numeros separados por comas: ");


let numero = n.split(",").map(Number);
n1=numero[0]
n2=numero[1]
n3=numero[2]

if(n1==n2==n3){
    console.log("los tres nuemros son iguales");
}/*else if(n1==n3){
    console.log("el nuemro 1 y el numero 3 son iguales");
}else if (n2==n3){
    console.log("el nuemro 1 y el numero 3 son iguales");
}else if(n1==n2){
    console.log("el nuemro 1 y el numero 2 son iguales");
}*/
else{
if(n1>=n2 & n1>=n3){
    if(n2>=n3){
        console.log(n1,n2,n3);
        console.log(n3,n2,n1);
    
    }else{
        console.log(n1,n3,n2);
        console.log(n2,n3,n1);        
    }
}else if(n2>=n1 & n2>=n3){
    if(n1>=n3){
        console.log(n2,n1,n3);
        console.log(n3,n1,n2);   
    }else{
        console.log(n2,n3,n1);
        console.log(n1,n3,n2);
    }
    
}else if(n3>=n1 & n3>=n2){
    if(n1>=n2){
        console.log(n2,n1,n3);
        console.log(n3,n1,n2);
    
    }else{
        console.log(n3,n2,n1);
        console.log(n1,n2,n3);
        }
}
}


