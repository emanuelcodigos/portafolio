const firebaseConfig = {
    apiKey: "AIzaSyAw3bxH5AK_4kPkY4tkzbFsPF6JIFJ2iFU",
    authDomain: "mi-portafolio-ab85d.firebaseapp.com",
    projectId: "mi-portafolio-ab85d",
    storageBucket: "mi-portafolio-ab85d.appspot.com",
    messagingSenderId: "613018203951",
    appId: "1:613018203951:web:41a3cf1612af52d98c93da",
    measurementId: "G-XS0QKBM15E"
  };

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

function animacionMenu(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);

}

function navegacionResponsive(){
    const divNavegacion = document.querySelector('.barra');
    
    divNavegacion.classList.toggle('notblock');
}

animacionMenu();

const contadorVisitas = () => {
    
    db.collection("visitas").doc("visitasActuales").get()
    .then(resp => {

        const visitasAnterior = resp.data().cantidad;
        const txtViews = document.querySelector('.visitas');

        txtViews.innerHTML = visitasAnterior + 1;
        db.collection("visitas").doc("visitasActuales").update({

            cantidad: visitasAnterior + 1
        });

    }).catch(err => {
        console.log(err);
    });
   
};

contadorVisitas();