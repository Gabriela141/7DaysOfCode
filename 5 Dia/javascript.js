function toggleFavorito(filmeId) {
  const favoritoAtual = localStorage.getItem(filmeId);
  const coracaoElemento = document.querySelector(`[data-id="${filmeId}"] .heart`);

  if (favoritoAtual) {
    localStorage.removeItem(filmeId);
    coracaoElemento.classList.remove('favoritado');
  } else {
    localStorage.setItem(filmeId, 'favorito');
    coracaoElemento.classList.add('favoritado');
  }
}

document.addEventListener('DOMContentLoaded', function() {
 
});

function atualizarFavoritos() {
  const elementos = document.querySelectorAll('.edit[data-id]');
  elementos.forEach(elemento => {
    const filmeId = elemento.getAttribute('data-id');
    const favoritoAtual = localStorage.getItem(filmeId);
    const coracaoElemento = elemento.querySelector('.heart');
    if (favoritoAtual) {
      coracaoElemento.classList.add('favoritado');
    } else {
      coracaoElemento.classList.remove('favoritado');
    }
  });
}

