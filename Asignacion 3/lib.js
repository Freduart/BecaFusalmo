//Funcion para obtener la hora actual del sistema
function mueveReloj(){
    momentoActual = new Date()        
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    
    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.getElementById("TimeOut").innerHTML=momentoActual;    
    setTimeout("mueveReloj()",1000)
}

//Funcion para añadir elementos a la tabla
var matrizElementos=[];
var matrizCostos=[];

function addRow(){

    var table=document.getElementById('myTable');

    //Fila de la tabla 
    var tr=document.createElement("tr");
    //Celdas de la tabla
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");

    //Elementos del formulario para llenar en las tablas
    var codigo=document.getElementById("codigo").value;
    var elemento=document.getElementById("elemento").value;
    var costo=document.getElementById("costo").value;
    var fecha=document.getElementById("fecha").value;

    //Con esta matriz solo obtengo la cadena para poder sumar los elementos    
    matrizElementos.push(codigo);
    matrizCostos.push(costo);

    let suma=0;
    //Abtraemos los elementos de la lista
    let element=document.getElementById("elementos");

    element.textContent="Total de elementos: "+matrizElementos.length;    


    //Aqui modificamos el total de costos
    let hCostos=document.getElementById("costo");
    console.log(costo);

    hCostos.textContent="Total de costos: "+costo;


    //Botones de accion
    // const edit=document.createElement("button");
    // const del=document.createElement("button");

    //Atributos de los botones de accion
    // edit.setAttribute('class', 'btn btn-primary');   
    // edit.setAttribute('style', 'margin-top: 5px; margin-left:5px;')
    // edit.textContent="Editar";
    // del.setAttribute('class','btn btn-danger');    
    // del.setAttribute('style', 'margin-top: 5px; margin-left:5px;')
    // del.textContent="Eliminar"; 
    
    
    //Aqui agregamos el evento al boton
    // for(i=0;i< matrizElementos.length;i++){        
    //     elementos+=matrizElementos[i];
    // }
    // console.log(elementos);
    
    //Modificamos las celdas de la tabla
    td1.textContent=codigo;
    td2.textContent=elemento;
    td3.textContent=costo;
    td4.textContent=fecha;

    var totalCost=document.getElementById("costo");
    totalCost.textContent="Total de Costos: "+costo ;

    //Las mostramos 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    // tr.appendChild(edit);
    // tr.appendChild(del);    

    table.appendChild(tr);    

        
    document.querySelectorAll('costos').forEach(function (total) {
        if (total.classList.length > 1) {
            var letra = total.classList[1];
            var suma = 0;
            document.querySelectorAll('.Columna' + letra).forEach(function (celda) {
                var valor = parseInt(celda.innerHTML);
                suma += valor;
            });
            total.innerHTML = suma;
        }
    });    
}

function Delete(item){
    try{
        this.matrizUbicacion.splice(item,1);
        console.log("Se borro con exito")
    }catch(e){
        console.log(e);
    }
    

}
