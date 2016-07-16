var lista = ["coca","pepsi","manzanita","sevenup","sprite","caballito"];

i = 0;
lista.sort();
var myList;
var li;

myList = document.getElementById("results");
imprime(lista);
function imprime(arreglo){
//document.write(arreglo);
		myList.innerHTML = "";
		for(i = 0; i <arreglo.length; i++){
		li = document.createElement("li");
		li.innerHTML=arreglo[i];
		myList.appendChild(li);
		//li.setAttribute("onclick","eliminar()");
		li.onclick = eliminar;
		}
}
function agregar(){
		lista.push(prompt("Introduce el nuevo articulo"));
			for(i = i; i <lista.length; i++){
			li = document.createElement("li");
			li.innerHTML=lista[i];
			myList.appendChild(li);
			li.setAttribute("onclick","eliminar()");
			}
			
	}
var lista1;
	

function ordenar(){
	imprime( lista.sort() );
}


function eliminar(){
		console.log(this);
		this.setAttribute("style","color:green");
		myList.removeChild(this);
}