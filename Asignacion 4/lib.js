var NumeroRecetas = 1;

$("#modalContacto").modal("show");

function agregar(){
    $("#myModal").modal('hide');
        NumeroRecetas++; 
        
        var tabla = document.createElement("table");
        tabla.className = "table table-bordered";
        
        var tr1 = document.createElement("tr");
        var td11 = document.createElement("td");
        td11.setAttribute("colspan", "2");
        td11.textContent = "Receta " + NumeroRecetas
        tr1.appendChild(td11);

        var tr2 = document.createElement("tr");
        var td21 = document.createElement("td");
        td21.innerHTML = "<h2>"+  $("#titulo").val() +"</h2>";
        tr2.appendChild(td21);


        var tr3 = document.createElement("tr");
        var td31 = document.createElement("td");
        td31.setAttribute("colspan", "2");            
        td31.innerText = "Ingredientes: \n"+ $("#ingredientes").val() + " \n\n Procedimientos: \n " +  $("#procedimiento").val();
        tr3.appendChild(td31);
        

        tabla.appendChild(tr1);
        tabla.appendChild(tr2);
        tabla.appendChild(tr3);
        
        limpiar()
        document.getElementById("Fillme").appendChild(tabla);
    
        var archivo = document.getElementById("imagen").files[0];
        var reader = new FileReader();
        if (archivo) {
            reader.readAsDataURL(archivo);
            reader.onloadend = function () {
                var td3 = document.createElement("td");
                td3.setAttribute("width", "50%");
                td3.setAttribute("align", "center");

                var img = document.createElement("img");
                img.setAttribute("width", "300px");
                img.setAttribute("height", "150px");
                
                img.setAttribute("src", reader.result);
                td3.appendChild(img);
                tr2.appendChild(td3);
            }
        }
}

function limpiar()
{
    var formElements = document.getElementsByClassName("form-control");
    for (let index = 0; index < formElements.length; index++) {            
        formElements[index].value = "";
    }    
}

function close(){
    alert("Enviado con exito!");
    limpiar();
    console.log("Se envio con exito");
}
