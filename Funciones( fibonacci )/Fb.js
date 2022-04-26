Fb(0)
Fb(1)
Fb(4)
Fb(8)
let n;
do{
    n = Number(prompt("Ingrese el número fibonacci que quiere calcular"));

}while(isNaN(n)|| n<0||n<34||n%1!=0)

function Fb(n) {
    if(n==1 || n==0)
    return 1
    else
    return Fb(n-1) + Fb(n-2)
}
let contenedor =document.querySelector("#contenedor")
contenedor.innerHTML = "El numero de fibonacci  numero "+ n +" es " + Fb(n)