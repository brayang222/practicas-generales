const key = `a1fa356e918a4253a390afb168e28ac8`;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
const main = document.querySelector('.main');
const mostrarNoticias = document.querySelector('#noticias')

fetch(url)
  .then((resp) => resp.json())
  .then(data => {
    console.log(data)
    const noticias = data.articles;
    noticias.map(noticia => {
      // Crear elementos HTML para mostrar la noticia
      const noticiaContainer = document.createElement('div');
      const img = document.createElement('img');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');

      // Asignar los valores de la noticia a los elementos correspondientes
      img.src = noticia.urlToImage;
      h1.textContent = noticia.title;
      p.textContent = noticia.description;

      // Agregar los elementos al contenedor de la noticia
      noticiaContainer.appendChild(img);
      noticiaContainer.appendChild(h1);
      noticiaContainer.appendChild(p);

      // Agregar el contenedor de la noticia al contenedor principal
      main.appendChild(noticiaContainer);
    });
  })
  .catch(error => {
    console.error('Error al obtener las noticias:', error);
  });