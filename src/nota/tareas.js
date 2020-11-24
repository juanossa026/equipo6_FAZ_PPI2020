// funcion autoinvocada para proteger nuestras funciones
(function(){
    // variables
    
    // accedemos a la lista
    var lista = document.getElementById("lista"),
    tareaInput=document.getElementById("tareaInput"),
    btnNuevaTarea=document.getElementById("btn-agregar");

    // funciones

    var agregarTarea=function(){
         var tarea=tareaInput.value,
              nuevaTarea=document.createElement("li"),// los li
              enlace=document.createElement("a"), //anclas
              contenido=document.createTextNode(tarea);// poner tarea
             // la validacion cuando el usuario precione,tenga que ver contenido
             if(tarea===""){
                 tareaInput.setAttribute("placeholder","Agregar una tarea valida");
                 tareaInput.className="error";
                 return false;
             }
// agregamos el contenido dentro del encale 
enlace.appendChild(contenido);

// le establecemos un atributo href
enlace.setAttribute("href","#");

// agregamos el enlace (a) a la nueva tarea(li)
nuevaTarea.appendChild(enlace);
// agregamos la nueva tarea a la lista
lista.appendChild(nuevaTarea);
tareaInput.value="";

for(var i=0;i<=lista.children.length-1;i++){
    lista.children[i].addEventListener("click",function(){
        // para remover
        this.parentNode.removeChild(this);
    });
    
      }
    
    };
    var comprobarinput=function(){
        tareaInput.className= "" ;
        tareaInput.setAttribute("placeholder","Agregue tu tarea");
 

    };
    var eleminarTarea=function(){
        // elimina el elemento cliqueado
    this.parentNode.removeChild(this);
    };

    // eventos

    //agregar el contenido 
    btnNuevaTarea.addEventListener("click",agregarTarea);

  /// comprobar input
  tareaInput.addEventListener("click",comprobarinput);

  // recorremos todo los elementos de la lista y agregar un evento
  // childen elementos hijos 
  //-1 por que empieza de cero
  for(var i=0;i<=lista.children.length-1;i++){
lista.children[i].addEventListener("click",eleminarTarea);

  }

} ());