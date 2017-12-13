/*El blog debera tener la posibilidad de generar articulos
Titulo, descripcion, imagen
Una vez completado agregarlo al principio del listado*/

var numero = 0;

$("#agregarBtn").on("click",function(){
    numero++;
    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var imagen = $("#imagen").val();

    var noticiasCant=$("#noticias div").length;

    $("#noticias div:odd").removeClass("impar"); 
    $("#noticias div:even").removeClass("par"); 
    
    $("#noticias").prepend("<div id=\"noticia" + numero + "\"></div>");
    $("#noticia" + numero).append("<span id=\"titulo" + numero + "\"></span>")
    $("#titulo" + numero).append(titulo+"<br>")
    $("#noticia" + numero ).append("<img src='"+imagen+"'><br>");
    $("#noticia" + numero ).append("&emsp;"+contenido);

    $("#noticias div").removeClass("primeroUltimo"); 

    $("#noticias div:odd").addClass("impar");
    $("#noticias div:even").addClass("par");
    
    $("#noticias div:first-child").addClass("primeroUltimo");
    $("#noticias div:last-child").addClass("primeroUltimo");
});

/*function agregarNoticia(){
    numero++;
    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var imagen = $("#imagen").val();

    var noticiasCant=$("#noticias div").length;

    $("#noticias div:odd").removeClass("impar"); 
    $("#noticias div:even").removeClass("par"); 
    
    $("#noticias").prepend("<div id=\"noticia" + numero + "\"></div>");
    $("#noticia" + numero).append("<span id=\"titulo" + numero + "\"></span>")
    $("#titulo" + numero).append(titulo+"<br>")
    $("#noticia" + numero ).append("<img src='"+imagen+"'><br>");
    $("#noticia" + numero ).append("&emsp;"+contenido);

    $("#noticias div").removeClass("primeroUltimo"); 

    $("#noticias div:odd").addClass("impar");
    $("#noticias div:even").addClass("par");
    
    $("#noticias div:first-child").addClass("primeroUltimo");
    $("#noticias div:last-child").addClass("primeroUltimo");
}*/