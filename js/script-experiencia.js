import { experienciasData } from './datos.js';


const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id'); 


const projectData = experienciasData[projectId];


if (!projectData) {
    window.location.href = 'index.html';
} else {
    document.body.classList.add('es-proyecto-' + projectId);    
    document.getElementById('project-name').innerText = projectData.name;
    document.getElementById('project-date').innerText = projectData.date;
    document.getElementById('project-description').innerHTML = projectData.description; 
    document.title = projectData.name; 

  
    const gallery = document.getElementById('project-gallery');
    projectData.images.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath; 
        img.alt = `Foto de ${projectData.name}`; 
        img.classList.add('foto-galeria'); 
        gallery.appendChild(img); 

        
    });

   if (projectData.videos) {
    projectData.videos.forEach(videoPath => {
        const video = document.createElement('video');
        video.src = videoPath;
        video.controls = true;
        video.classList.add('foto-galeria-video');
        gallery.appendChild(video);
    });
}
    // --- GPS DEL BOTÓN VOLVER ---
document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const idActual = parametros.get('id');
    const botonVolver = document.querySelector('.boton-volver');

    // Ruta de regreso
    if(botonVolver && idActual) {
        botonVolver.href = "experiencias.html#exp-" + idActual;
    }
});

}