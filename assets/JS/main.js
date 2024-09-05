 
 function searchText(){
    const buscar = document.getElementById("search2").value.trim().toLowerCase();
    
    const contenedor = document.getElementById("aboutme");
    let contenedorHtml = contenedor.innerHTML;

    if(!buscar){
        return;
    }
    const regex = new RegExp(`(${buscar})`, 'gi');

    contenedorHtml = contenedorHtml.replace(regex, '<span class="resaltar">$1</span>' );
    
    contenedor.innerHTML = contenedorHtml;
}
