document.addEventListener('DOMContentLoaded', function(){
    timerTexto();
    getMisProyectos();
    

});

const arrProyectos = new Array();
const divModal = document.querySelector('#modal');


let objetos = document.querySelectorAll('.icono-habilidad').forEach(elemet=>{

    elemet.addEventListener('click', function(){
        let descripcion = elemet.childNodes[1];
        descripcion.classList.toggle('notblock');
    });
});



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

function cerrar(){
   divModal.innerHTML = '';
}

function timerTexto(){
    let timer = setTimeout(function(){
      let divTextos = document.querySelector('#txt-header');
      let texto = document.createElement('h2');
      texto.classList.add('secundario');
      texto.innerHTML = 'Programador   ..<span></span>';
      divTextos.appendChild(texto);
      
    }, 3000);
}

const formulario = document.querySelector('#formularioContacto');
formulario.addEventListener('submit', (e)=>{
   //e.preventDefault();
   console.log('envioDeFormulario');
});



function getMisProyectos(){

    db.collection('mis-proyectos').get()
    .then(resp => {

        resp.forEach(elemento=>{
           let data = elemento.data();
           arrProyectos.push(data);
        });
       crearProyectos();
  
    }).catch(err =>{
       console.log(err);
    });
}





