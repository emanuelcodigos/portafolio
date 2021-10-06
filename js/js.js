document.addEventListener('DOMContentLoaded', function(){
    animacionMenu();
    crearProyectos();
    timerTexto();

});

const divModal = document.querySelector('#modal');
function animacionMenu(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);

}

function navegacionResponsive(){
    const divNavegacion = document.querySelector('.barra');
    
    divNavegacion.classList.toggle('notblock');
}


let objetos = document.querySelectorAll('.icono-habilidad').forEach(elemet=>{

    elemet.addEventListener('click', function(){
        let descripcion = elemet.childNodes[1];
        descripcion.classList.toggle('notblock');
    });
});


const arrProyectos = new Array();

let proyecto1 = {
    titulo: 'Tienda Virtual Supermercado',
    descripcionBreve: 'PHP, JavaScript, HTML, Css, Mysql, Firebase, MercadoPago Api',
    descripcion: `1 - Diseño y desarrollo Sistema de Usuarios con Roles y Permisos el cual se pude implementar en cualquier proyecto.
    2 - Sistema administrativo de la tienda virtual. 3 - Pasarela de pagos con Mercado Pago y Paypal`,
    web: 'https://autoservicio5026.com/',
    img: '../portafolio/assets/img/portfolio/5.jpg'
}

let proyecto2 = {
    titulo: 'Aplicacion de Juegos Ultimos Cartuchos',
    descripcionBreve: 'JavaScript, HTML, CSS, Firebase',
    descripcion: 'Juegos de Trivia y  mini red Social, con autenticacion de usuarios, historial de puntajes, ranking de los mejores jugadores. Base de datos Firebase ',
    web: 'https://emanuelcodigos.github.io/ultimoscartuchos/',
    img: '../portafolio/assets/img/portfolio/3.jpg'
}

arrProyectos.push(proyecto1);
arrProyectos.push(proyecto2);
arrProyectos.push(proyecto1);

function crearProyectos(){
    let divPrincipal = document.querySelector('#divProyecto');
    
    for(let i = 0; i < arrProyectos.length; i++){
        let elemento = document.createElement('div');
        elemento.classList.add('proyecto');
        elemento.style.backgroundImage = 'url('+arrProyectos[i]['img']+')';
        elemento.innerHTML = `
            <div class="proyecto-descripcion">
                <p class="titulo">`+arrProyectos[i]['titulo']+`</p>
                <p class="descripcion">`+arrProyectos[i]['descripcionBreve']+`</p>
                <div class="botones">
                        <a href="`+arrProyectos[i]['web']+`" target="_blank" class="boton"><i class="fas fa-globe"></i> Sitio Web</a>
                        <a class="boton" onclick="mostrarDatosProyecto(`+i+`)"><i class="fas fa-info-circle"></i> Informacion</a>
                </div>
            </div>`;
        divPrincipal.appendChild(elemento);
        elemento.addEventListener('click',function(){
            elemento.childNodes[1].classList.toggle('notblock');
        });

    }
        
}

function mostrarDatosProyecto(i){

    let modal = document.createElement('div');
    modal.classList.add("div-modal");
    modal.innerHTML = `<div class="modal">
    <h2>`+arrProyectos[i]['titulo']+`</h2>
    <p>`+arrProyectos[i]['descripcion']+`</p>
    <button onclick="cerrar()">CERRAR</button>
    </div>
    `;
    divModal.appendChild(modal);
    
}

function cerrar(modal){
   divModal.removeChild(culi.childNodes[0]);
    
}

function timerTexto(){
    let timer = setTimeout(function(){
      let divTextos = document.querySelector('#txt-header');
      let texto = document.createElement('h2');
      texto.classList.add('secundario');
      texto.innerHTML = 'Programador   ..<span></span>';
      divTextos.appendChild(texto);
      
    }, 4000);
}

const formulario = document.querySelector('#formularioContacto');
formulario.addEventListener('submit', (e)=>{
   //e.preventDefault();
   console.log('envioDeFormulario');
});
