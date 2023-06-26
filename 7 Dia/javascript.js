function filtrarFavoritos() {
  const checkbox = document.getElementById('sln');
  const filmes = document.querySelectorAll('.filme');

  if (checkbox.checked) {
    filmes.forEach(filme => {
      const favorito = filme.getAttribute('data-favorito');
      if (favorito === 'true') {
        filme.style.display = 'block';
      } else {
        filme.style.display = 'none';
      }
    });
  } else {
    filmes.forEach(filme => {
      filme.style.display = 'block';
    });
  }
}

