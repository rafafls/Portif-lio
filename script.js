function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('ativa'));

  const secaoAtiva = document.getElementById(secaoId);
  secaoAtiva.classList.add('ativa');
}