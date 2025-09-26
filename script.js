function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('ativa'));
  
  const secaoAtiva = document.getElementById(id);
  secaoAtiva.classList.add('ativa');

  // animação da foto só na seção "sobre"
  if(id === 'sobre') {
    const foto = secaoAtiva.querySelector('.foto-sobre');
    // resetar para efeito de fade/zoom toda vez que abrir
    foto.classList.remove('ativa');
    setTimeout(() => {
      foto.classList.add('ativa');
    }, 100); // pequeno delay para dar o efeito
  }
}

