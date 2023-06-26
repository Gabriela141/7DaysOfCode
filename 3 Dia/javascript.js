const apiKey = 'f4451def6af4063be4c9fa7714193044';

// Exemplo de requisição para obter os filmes populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Processar os dados retornados
    const movies = data.results;
    movies.forEach(movie => {
      console.log(movie.title);
    });
  })
  .catch(error => {
    // Lidar com erros
    console.error(error);
  });






//PRIMEIRO ELEMENTO
const main = document.createElement('main');
const h2 = document.createElement('h2');
const divInput = document.createElement('div');
const input = document.createElement('input');
const imgSearch = document.createElement('img');
const divCheckbox = document.createElement('div');
const checkbox = document.createElement('input');
const spanCheckbox = document.createElement('span');
const divEdit = document.createElement('div');
const imgFilm = document.createElement('img');
const divCore = document.createElement('div');
const h3 = document.createElement('h3');
const divLine = document.createElement('div');
const divHeart = document.createElement('div');
const imgHeart = document.createElement('img');
const spanHeart = document.createElement('span');
const divStar = document.createElement('div');
const imgStar = document.createElement('img');
const spanStar = document.createElement('span');
const divSynopsis = document.createElement('div');
const p = document.createElement('p');


main.classList.add('container');
h2.textContent = 'Filmes Populares';
divInput.classList.add('input_p');
input.classList.add('input');
input.type = 'text';
input.name = 'pesquisa';
input.id = 'icon-pesquisa';
input.placeholder = 'Digite algum filme para pesquisar...';
imgSearch.src = 'img/search.svg';
imgSearch.width = '30';
imgSearch.height = '30';
divCheckbox.classList.add('chec');
checkbox.type = 'checkbox';
checkbox.name = 'sln';
checkbox.id = 'sln';
spanCheckbox.textContent = 'Mostrar apenas meus filmes favoritos';
divEdit.classList.add('edit');
imgFilm.src = 'img/auto_da_compadecida.jpg';
imgFilm.width = '150';
imgFilm.height = '150';
divCore.classList.add('core');
h3.textContent = 'Auto da Compadecida';
divLine.classList.add('linha');
divHeart.classList.add('coracao');
imgHeart.src = 'img/heart.svg';
imgHeart.width = '30';
imgHeart.height = '30';
spanHeart.textContent = 'Favoritar';
divStar.classList.add('estrela');
imgStar.src = 'img/star_small.svg';
imgStar.width = '50';
imgStar.height = '50';
spanStar.textContent = '6.8';
divSynopsis.classList.add('sinopse');
p.textContent = 'As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.';


divInput.appendChild(input);
divInput.appendChild(imgSearch);
divCheckbox.appendChild(checkbox);
divCheckbox.appendChild(spanCheckbox);
divHeart.appendChild(imgHeart);
divHeart.appendChild(spanHeart);
divStar.appendChild(imgStar);
divStar.appendChild(spanStar);
divLine.appendChild(divHeart);
divLine.appendChild(divStar);
divCore.appendChild(h3);
divCore.appendChild(divLine);
divEdit.appendChild(imgFilm);
divEdit.appendChild(divCore);
divEdit.appendChild(divSynopsis);
divSynopsis.appendChild(p);
main.appendChild(h2);
main.appendChild(divInput);
main.appendChild(divCheckbox);
main.appendChild(divEdit);


document.body.appendChild(main);




//ESTE É O SEGUNDO ELEMENTO
const divEdit2 = document.createElement('div');
const imgFilm2 = document.createElement('img');
const divCore2 = document.createElement('div');
const h3_2 = document.createElement('h3');
const divLine2 = document.createElement('div');
const divHeart2 = document.createElement('div');
const imgHeart2 = document.createElement('img');
const spanHeart2 = document.createElement('span');
const divStar2 = document.createElement('div');
const imgStar2 = document.createElement('img');
const spanStar2 = document.createElement('span');
const divSynopsis2 = document.createElement('div');
const p2 = document.createElement('p');


divEdit2.classList.add('edit');
imgFilm2.src = 'img/interestelar.jpg'; 
imgFilm2.width = '150';
imgFilm2.height = '150';
divCore2.classList.add('core');
h3_2.textContent = 'Interestelar'; 
divLine2.classList.add('linha');
divHeart2.classList.add('coracao');
imgHeart2.src = 'img/heart.svg';
imgHeart2.width = '30';
imgHeart2.height = '30';
spanHeart2.textContent = 'Favoritar';
divStar2.classList.add('estrela');
imgStar2.src = 'img/star_small.svg';
imgStar2.width = '50';
imgStar2.height = '50';
spanStar2.textContent = '6.8';
divSynopsis2.classList.add('sinopse');
p2.textContent = ' As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem  a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.'; 



divHeart2.appendChild(imgHeart2);
divHeart2.appendChild(spanHeart2);
divStar2.appendChild(imgStar2);
divStar2.appendChild(spanStar2);
divLine2.appendChild(divHeart2);
divLine2.appendChild(divStar2);
divCore2.appendChild(h3_2);
divCore2.appendChild(divLine2);
divEdit2.appendChild(imgFilm2);
divEdit2.appendChild(divCore2);
divEdit2.appendChild(divSynopsis2);
divSynopsis2.appendChild(p2);


main.appendChild(divEdit2);


document.body.appendChild(main);







//ESTE É O TERCEIRO ELEMENTO
const divEdit3 = document.createElement('div');
const imgFilm3 = document.createElement('img');
const divCore3 = document.createElement('div');
const h3_3 = document.createElement('h3');
const divLine3 = document.createElement('div');
const divHeart3 = document.createElement('div');
const imgHeart3 = document.createElement('img');
const spanHeart3 = document.createElement('span');
const divStar3 = document.createElement('div');
const imgStar3 = document.createElement('img');
const spanStar3 = document.createElement('span');
const divSynopsis3 = document.createElement('div');
const p3 = document.createElement('p');


divEdit3.classList.add('edit');
imgFilm3.src = 'img/noiva_cadaver.jpg'; 
imgFilm3.width = '150';
imgFilm3.height = '150';
divCore3.classList.add('core');
h3_3.textContent = 'Noiva Cadáver';
divLine3.classList.add('linha');
divHeart3.classList.add('coracao');
imgHeart3.src = 'img/heart.svg';
imgHeart3.width = '30';
imgHeart3.height = '30';
spanHeart3.textContent = 'Favoritar';
divStar3.classList.add('estrela');
imgStar3.src = 'img/star_small.svg';
imgStar3.width = '50';
imgStar3.height = '50';
spanStar3.textContent = '6.8';
divSynopsis3.classList.add('sinopse');
p3.textContent = 'As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.';


divHeart3.appendChild(imgHeart3);
divHeart3.appendChild(spanHeart3);
divStar3.appendChild(imgStar3);
divStar3.appendChild(spanStar3);
divLine3.appendChild(divHeart3);
divLine3.appendChild(divStar3);
divCore3.appendChild(h3_3);
divCore3.appendChild(divLine3);
divEdit3.appendChild(imgFilm3);
divEdit3.appendChild(divCore3);
divEdit3.appendChild(divSynopsis3);
divSynopsis3.appendChild(p3);


main.appendChild(divEdit3);










//ESTE É O QUARTO ELEMENTO
const divEdit4 = document.createElement('div');
const imgFilm4 = document.createElement('img');
const divCore4 = document.createElement('div');
const h3_4 = document.createElement('h3');
const divLine4 = document.createElement('div');
const divHeart4 = document.createElement('div');
const imgHeart4 = document.createElement('img');
const spanHeart4 = document.createElement('span');
const divStar4 = document.createElement('div');
const imgStar4 = document.createElement('img');
const spanStar4 = document.createElement('span');
const divSynopsis4 = document.createElement('div');
const p4 = document.createElement('p');


divEdit4.classList.add('edit');
imgFilm4.src = 'img/o_poderoso_chefao.jpg'; 
imgFilm4.width = '150';
imgFilm4.height = '150';
divCore4.classList.add('core');
h3_4.textContent = 'Título do Filme 4'; 
divLine4.classList.add('linha');
divHeart4.classList.add('coracao');
imgHeart4.src = 'img/heart.svg';
imgHeart4.width = '30';
imgHeart4.height = '30';
spanHeart4.textContent = 'Favoritar';
divStar4.classList.add('estrela');
imgStar4.src = 'img/star_small.svg';
imgStar4.width = '50';
imgStar4.height = '50';
spanStar4.textContent = '6.8';
divSynopsis4.classList.add('sinopse');
p4.textContent = ' Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.';


divHeart4.appendChild(imgHeart4);
divHeart4.appendChild(spanHeart4);
divStar4.appendChild(imgStar4);
divStar4.appendChild(spanStar4);
divLine4.appendChild(divHeart4);
divLine4.appendChild(divStar4);
divCore4.appendChild(h3_4);
divCore4.appendChild(divLine4);
divEdit4.appendChild(imgFilm4);
divEdit4.appendChild(divCore4);
divEdit4.appendChild(divSynopsis4);
divSynopsis4.appendChild(p4);


main.appendChild(divEdit4);















//ESTE É O QUINTO ELEMENTO
const divEdit5 = document.createElement('div');
const imgFilm5 = document.createElement('img');
const divCore5 = document.createElement('div');
const h3_5 = document.createElement('h3');
const divLine5 = document.createElement('div');
const divHeart5 = document.createElement('div');
const imgHeart5 = document.createElement('img');
const spanHeart5 = document.createElement('span');
const divStar5 = document.createElement('div');
const imgStar5 = document.createElement('img');
const spanStar5 = document.createElement('span');
const divSynopsis5 = document.createElement('div');
const p5 = document.createElement('p');


divEdit5.classList.add('edit');
imgFilm5.src = 'img/piratas_do_caribe.jpg';
imgFilm5.width = '150';
imgFilm5.height = '150';
divCore5.classList.add('core');
h3_5.textContent = 'Piratas do Caribe'; 
divLine5.classList.add('linha');
divHeart5.classList.add('coracao');
imgHeart5.src = 'img/heart.svg';
imgHeart5.width = '30';
imgHeart5.height = '30';
spanHeart5.textContent = 'Favoritar';
divStar5.classList.add('estrela');
imgStar5.src = 'img/star_small.svg';
imgStar5.width = '50';
imgStar5.height = '50';
spanStar5.textContent = '6.8';
divSynopsis5.classList.add('sinopse');
p5.textContent = '   O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação. Com o navio de Sparrow, Barbossa invade a cidade de Port Royal, levando  consigo Elizabeth Swann, filha do governador. Para recuperar sua embarcação, Sparrow recebe a ajuda de Will Turner, um grande amigo de Elizabeth. Eles desbravam os mares em direção à misteriosa Ilha da Morte, tentando impedir que os piratas-esqueleto derramem o sangue de Elizabeth para desfazer a maldição que os assola.'; 


divHeart5.appendChild(imgHeart5);
divHeart5.appendChild(spanHeart5);
divStar5.appendChild(imgStar5);
divStar5.appendChild(spanStar5);
divLine5.appendChild(divHeart5);
divLine5.appendChild(divStar5);
divCore5.appendChild(h3_5);
divCore5.appendChild(divLine5);
divEdit5.appendChild(imgFilm5);
divEdit5.appendChild(divCore5);
divEdit5.appendChild(divSynopsis5);
divSynopsis5.appendChild(p5);


main.appendChild(divEdit5);








