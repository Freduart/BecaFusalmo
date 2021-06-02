//Solicitamos el numero al que queremos llegar
var numero=Number(prompt("Digite un numero: "));

//Este bucle hace que se valide en dado caso no se digite un numero mayor que cero
while (numero<0) {
    alert("Ingrese un numero mayor que cero");
    numero=Number(prompt("Digite un numero: "));
}

//Creamos un documentFragment para adicionar un nuevo arbol al DOM 
const fragment=document.createDocumentFragment();
//Bucles para poder multiplicar hasta 10 y hasta el numero que hemos indicado
for(var i=0;i<numero;i++){
    for(var j=0; j<10;j++){

        //Creamos las cadenas de texto y las multiplicaciones
        let fila=(i+1)+" * "+(j+1);
        let producto=(i+1)*(1+j);
        let resultado=fila+" = "+producto;
        let cadena=resultado;
        
        //Creamos las listas para poder crear las tablas
        const tabla=document.createElement('li');

        //Validamos que sea par o inpar para poder darle un estilo
        if(producto%2==0){
            tabla.style.fontSize="20px";
            tabla.textContent=cadena;
            tabla.style.color="#2abcdd";
            fragment.appendChild(tabla);
        }else{
            tabla.style.fontSize="20px";
            tabla.textContent=cadena;
            tabla.style.color="#ff6347";
            //ff6347
            fragment.appendChild(tabla);
            
        }
    }

    //Creamos los elementos para poder generar las tablas  y agregamos estilo 
    const list=document.createElement('ul');
    const div=document.createElement('div');
    const encabezado=document.createElement('h1');    
    encabezado.textContent="Tabla del "+(1+i);
    encabezado.style.color="#000000"
    div.style.backgroundColor="#ffffff";
    
    //Posicionamos los nuevos elementos del DOM 
    list.appendChild(fragment);
    div.appendChild(encabezado);
    div.appendChild(list);
    const divPrincipal=document.getElementById("divPrincipal");
    divPrincipal.appendChild(div);    
}