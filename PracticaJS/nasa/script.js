window.addEventListener('load', obtenerDatos)

function obtenerDatos() {

  const key = `THrvkyf0glfmOsl49ezraK3pMTY8UJ1ZlcQwDP1L`;
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=${key}`

  fetch(ruta) 
    .then(resp => resp.json())
    .then(result => datos(result))
}

function datos({ date, explanation, media_type, title, url }) {

  const titulo = document.querySelector('#titulo')
  const fecha = document.querySelector('#fecha')
  const desc = document.querySelector('#descripcion')
  const multimedia = document.querySelector('#multimedia')

  titulo.innerHTML = title;
  fecha.innerHTML = date;
  desc.innerHTML = explanation;
  if (media_type === 'video') {
    multimedia.innerHTML = `<iframe src="${url}" title="" allowfullscreen></iframe>`;
  } else {
    multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="...">`
  }
}